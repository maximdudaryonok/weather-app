import { useFavorite } from "@/hooks/useFavorite";
import { useWeatherQuery } from "@/hooks/useWeather";
import { useNavigate } from "react-router-dom";
import { Button } from "./button";
import { Loader2, X } from "lucide-react";
import { toast } from "sonner";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  ScrollAreaScrollbar,
  ScrollAreaThumb,
} from "@radix-ui/react-scroll-area";

interface FavoriteCityTableProps {
  id: string;
  name: string;
  lat: number;
  lon: number;
  onRemove: (id: string) => void;
}
const FavoriteCities = () => {
  const { favorites, removeFavorite } = useFavorite();

  if (!favorites.length) {
    return null;
  }
  return (
    <>
      <h1 className="text-xl font-bold tracking-tight">Favorites</h1>
      <ScrollArea className="w-full pb-4 whitespace-nowrap">
        <div className="flex gap-4 w-max ">
          {favorites.map((city) => {
            return (
              <div className="overflow-hidden">
                <FavoriteCityTable
                  key={city.id}
                  {...city}
                  onRemove={() => removeFavorite.mutate(city.id)}
                />
              </div>
            );
          })}
        </div>
        <ScrollAreaScrollbar
          orientation="horizontal"
          className="flex h-0.5 touch-none select-none transition-colors"
        >
          <ScrollAreaThumb className="relative flex-1 rounded-full bg-muted-foreground/50 hover:bg-muted-foreground/70" />
        </ScrollAreaScrollbar>
      </ScrollArea>
    </>
  );
};

function FavoriteCityTable({
  id,
  name,
  lat,
  lon,
  onRemove,
}: FavoriteCityTableProps) {
  const navigate = useNavigate();
  const { data: weather, isLoading } = useWeatherQuery({ lat, lon });

  return (
    <div
      onClick={() => navigate(`/city/${name}?lat=${lat}&lon=${lon}`)}
      role="button"
      tabIndex={0}
      className="relative flex min-w-62.5 cursor-pointer items-center gap-3 rounded-lg border bg-card p-4 pr-4 shadow-lg transition-all hover:shadow-md"
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-1 top-1 h-6 w-6 rounded-full p-0 hover:text-destructive-foreground group-hover:opacity-100"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(id);
          toast.error(`Removed ${name} from Favorite`);
        }}
      >
        <X className="h-4 w-4" />
      </Button>
      {isLoading ? (
        <div className="flex h-8 items-center justify-center">
          <Loader2 className="h-4 w-4 animate-spin" />
        </div>
      ) : weather ? (
        <>
          <div className="flex items-center gap-2">
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
              alt={weather.weather[0].description}
            />

            <div className="ml-auto text-right">
              <p className="font-medium">{name} </p>
              <p className="text-xs text-muted-foreground">
                {weather.sys.country}
              </p>
            </div>
          </div>
          <div>
            <p className="font-bold text-xl">
              {Math.round(weather.main.temp)}{" "}
            </p>
            <p className="text-xs capitalize text-muted-foreground">
              {weather.weather[0].description}
            </p>
          </div>
        </>
      ) : null}
    </div>
  );
}
export default FavoriteCities;
