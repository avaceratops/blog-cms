import { Link, Outlet } from 'react-router-dom';
import LogoutButton from '../components/LogoutButton';

export default function Root({ user }) {
  return (
    <>
      <header className="mb-4 sm:flex sm:items-center sm:justify-between">
        <Link to="/">
          <h1 className="text-xl font-semibold">
            ava.dev <span className="text-gray-500">/</span> admin
          </h1>
        </Link>

        {user && (
          <section className="mt-4 flex justify-between gap-4 xs:justify-start sm:mt-0">
            <p>
              Logged in as <span className="font-semibold">{user}</span>
            </p>
            <LogoutButton />
          </section>
        )}
      </header>
      <main className="mx-auto my-12 max-w-screen-md">
        <Outlet />
      </main>
    </>
  );
}
