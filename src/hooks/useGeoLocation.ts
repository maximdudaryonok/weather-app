import type { Coordinates } from "@/api/types";
import { useEffect, useState } from "react";

interface GeoLocationState {
  coordinates: Coordinates | null;
  error: string | null;
  isLoading: boolean;
}

export function useGeoLocation() {
  const [locationData, setLocationData] = useState<GeoLocationState>({
    coordinates: null,
    error: null,
    isLoading: true,
  });

  const getLocation = () => {
    setLocationData((prev) => ({ ...prev, isLoading: true, error: null }));
    if (!navigator.geolocation) {
      setLocationData({
        coordinates: null,
        error: "Geolocation is not supported by your browser",
        isLoading: false,
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocationData({
          coordinates: {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          },
          error: null,
          isLoading: false,
        });
      },
      (error) => {
      
        if (error.code === error.TIMEOUT) {
          const handleWatchSuccess = (position: GeolocationPosition) => {
            setLocationData({
              coordinates: {
                lat: position.coords.latitude,
                lon: position.coords.longitude,
              },
              error: null,
              isLoading: false,
            });
          };

          const handleWatchError = (watchError: GeolocationPositionError) => {
            let errorMessage: string;

            switch (watchError.code) {
              case watchError.PERMISSION_DENIED:
                errorMessage =
                  "Location permission denied. Please enable location access.";
                break;
              case watchError.POSITION_UNAVAILABLE:
                errorMessage = "Location info is unavailable.";
                break;
              case watchError.TIMEOUT:
                errorMessage = "Location request timed out. Please try again.";
                break;
              default:
                errorMessage = "An unknown error occurred";
            }

            setLocationData({
              coordinates: null,
              error: errorMessage,
              isLoading: false,
            });
          };

          const watchId = navigator.geolocation.watchPosition(
            handleWatchSuccess,
            handleWatchError,
            {
              enableHighAccuracy: false, 
              timeout: 10000,
              maximumAge: 600000,
            }
          );

          setTimeout(() => {
            navigator.geolocation.clearWatch(watchId);
            if (locationData.isLoading) {
              setLocationData({
                coordinates: null,
                error: "Location request timed out. Please check your location settings and try again.",
                isLoading: false,
              });
            }
          }, 10000);
        } else {
          
          let errorMessage: string;

          switch (error.code) {
            case error.PERMISSION_DENIED:
              errorMessage =
                "Location permission denied. Please enable location access.";
              break;
            case error.POSITION_UNAVAILABLE:
              errorMessage = "Location info is unavailable.";
              break;
            default:
              errorMessage = "An unknown error occurred";
          }

          setLocationData({
            coordinates: null,
            error: errorMessage,
            isLoading: false,
          });
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 0,
      }
    );
  };

  useEffect(() => {
    getLocation();
  }, []);

  return {
    ...locationData,
    getLocation,
  };
}
