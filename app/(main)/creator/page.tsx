import ArtistThunbnail from "@/app/components/artistThunbnail";

export default function Creator() {
  return (
    <section className="m-16">
      <div className="flex w-full flex-wrap justify-around gap-10  px-20 py-28">
        <ArtistThunbnail
          href="/creator/zzhe"
          src="/image/zzhe/zzhe.jpg"
          label="photographer"
          name="周哲緯"
          creator="ZZHE"
          email="zzhe828@gmail.com"
        />
        <ArtistThunbnail
          href="/creator/shuo"
          src="/image/shuo/shuo.jpg"
          label="photographer"
          name="莊承碩"
          creator="SHUO"
          email="zzhe828@gmail.com"
        />
      </div>
    </section>
  );
}
