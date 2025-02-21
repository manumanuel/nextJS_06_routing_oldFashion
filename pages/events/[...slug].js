import { useRouter } from "next/router";

function FilteredEventPage() {
  const router = useRouter();
  console.log(router.query);
  return <h3>Filtered event page</h3>;
}
export default FilteredEventPage;
