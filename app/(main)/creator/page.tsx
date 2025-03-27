import ArtistThunbnail from "@/app/components/artistThunbnail";

export default function Creator() {
  return (
    <section className="m-16">
      <div className="flex w-full justify-between gap-10  px-20 py-28">
        <ArtistThunbnail
          href="/creator/zzhe"
          src="/image/zzhe/zzhe.jpg"
          label="photographer"
          name="周哲緯"
          email="zzhe828@gmail.com"
        />
        <ArtistThunbnail
          href="/creator/zzhe"
          src="/image/zzhe/zzhe.jpg"
          label="photographer"
          name="周哲緯"
          email="zzhe828@gmail.com"
        />
      </div>
    </section>
  );
}
