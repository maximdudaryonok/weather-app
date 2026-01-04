import { Skeleton } from "./ui/skeleton";
function WeatherSkeleton() {
  return (
    <div className="space-y-6">
      <div className="grip gap-6">
        <Skeleton className="h-75 w-full rounded-lg mb-4" />
        <Skeleton className="h-75 w-full rounded-lg mb-4" />

        <div className="grip gap-6 md:grid-cols-2">
          {" "}
          <Skeleton className="h-75 w-full rounded-lg mb-4" />
          <Skeleton className="h-75 w-full rounded-lg mb-4" />
        </div>
      </div>
    </div>
  );
}
export default WeatherSkeleton;
