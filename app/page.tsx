import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <Link href="/myprofile-phone-widget" className="underline">
          MyProfile Phone Widget
        </Link>
        <br />
        <br />
        <Link href="/myprofile-address-widget" className="underline">
          MyProfile Address Widget
        </Link>
        <br />
        <br />
        <Link href="/myprofile-birthday-widget" className="underline">
          MyProfile birthday Widget
        </Link>
      </main>
    </div>
  );
}
