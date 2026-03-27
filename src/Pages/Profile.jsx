import React from "react";
import { Link, Navigate, useNavigate } from "react-router";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { LuUserRound } from "react-icons/lu";
import { useGetCurrentUserQuery } from "../Services/api";
import { clearSession, getStoredSession, useAuthSession } from "../Services/auth";

const Profile = () => {
  const navigate = useNavigate();
  const session = useAuthSession();
  const storedSession = getStoredSession();
  const { data, isLoading, isError } = useGetCurrentUserQuery(undefined, {
    skip: !session?.accessToken,
  });

  if (!session?.accessToken) {
    return <Navigate to='/login' replace />;
  }

  const profile = data ?? storedSession;
  const fullName = [profile?.firstName, profile?.lastName].filter(Boolean).join(" ");
  const initials = fullName
    .split(" ")
    .filter(Boolean)
    .map((name) => name[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const handleLogout = () => {
    clearSession();
    navigate("/login", { replace: true });
  };

  return (
    <section className='bg-secondary min-h-screen px-4 py-10 sm:px-6 lg:px-8'>
      <div className='mx-auto flex w-full max-w-6xl flex-col gap-6 lg:flex-row'>
        <div className='w-full rounded-3xl bg-white p-6 shadow-lg sm:p-8 lg:max-w-sm'>
          <div className='flex flex-col items-center text-center'>
            {profile?.image ? (
              <img
                src={profile.image}
                alt={fullName || profile?.username || "User"}
                className='h-28 w-28 rounded-full border-4 border-brand/15 object-cover'
              />
            ) : (
              <div className='flex h-28 w-28 items-center justify-center rounded-full bg-brand text-3xl font-bold text-white'>
                {initials || "U"}
              </div>
            )}
            <p className='mt-5 inline-flex items-center rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand'>
              Signed In
            </p>
            <h1 className='mt-4 text-2xl font-bold text-gray-800'>
              {fullName || profile?.username || "User Profile"}
            </h1>
            <p className='mt-1 text-sm text-gray-500'>@{profile?.username || "guest"}</p>
          </div>

          <div className='mt-8 space-y-4 text-sm text-gray-600'>
            <div className='flex items-start gap-3 rounded-2xl bg-secondary p-4'>
              <MdEmail className='mt-0.5 text-xl text-brand' />
              <div>
                <p className='font-semibold text-gray-800'>Email</p>
                <p>{profile?.email || "Not available"}</p>
              </div>
            </div>
            <div className='flex items-start gap-3 rounded-2xl bg-secondary p-4'>
              <MdPhone className='mt-0.5 text-xl text-brand' />
              <div>
                <p className='font-semibold text-gray-800'>Phone</p>
                <p>{profile?.phone || "Not available"}</p>
              </div>
            </div>
            <div className='flex items-start gap-3 rounded-2xl bg-secondary p-4'>
              <MdLocationOn className='mt-0.5 text-xl text-brand' />
              <div>
                <p className='font-semibold text-gray-800'>Address</p>
                <p>
                  {profile?.address?.address
                    ? `${profile.address.address}, ${profile.address.city ?? ""}`
                    : "Not available"}
                </p>
              </div>
            </div>
          </div>

          <button
            type='button'
            onClick={handleLogout}
            className='mt-8 w-full rounded-2xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-black'>
            Log Out
          </button>
        </div>

        <div className='flex-1 rounded-3xl bg-white p-6 shadow-lg sm:p-8'>
          <div className='flex flex-col gap-4 border-b border-gray-100 pb-6 sm:flex-row sm:items-center sm:justify-between'>
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.2em] text-brand'>
                Account Overview
              </p>
              <h2 className='mt-2 text-3xl font-bold text-gray-800'>Welcome back, {profile?.firstName || profile?.username}</h2>
            </div>
            <Link
              to='/shop'
              className='inline-flex items-center justify-center rounded-2xl border border-brand px-5 py-3 text-sm font-semibold text-brand transition hover:bg-brand hover:text-white'>
              Continue Shopping
            </Link>
          </div>

          <div className='mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3'>
            <div className='rounded-3xl bg-secondary p-5'>
              <p className='text-sm font-medium text-gray-500'>Full Name</p>
              <p className='mt-2 text-lg font-semibold text-gray-800'>{fullName || "Not available"}</p>
            </div>
            <div className='rounded-3xl bg-secondary p-5'>
              <p className='text-sm font-medium text-gray-500'>Username</p>
              <p className='mt-2 text-lg font-semibold text-gray-800'>{profile?.username || "Not available"}</p>
            </div>
            <div className='rounded-3xl bg-secondary p-5'>
              <p className='text-sm font-medium text-gray-500'>Gender</p>
              <p className='mt-2 text-lg font-semibold capitalize text-gray-800'>{profile?.gender || "Not available"}</p>
            </div>
            <div className='rounded-3xl bg-secondary p-5'>
              <p className='text-sm font-medium text-gray-500'>Birth Date</p>
              <p className='mt-2 text-lg font-semibold text-gray-800'>{profile?.birthDate || "Not available"}</p>
            </div>
            <div className='rounded-3xl bg-secondary p-5'>
              <p className='text-sm font-medium text-gray-500'>University</p>
              <p className='mt-2 text-lg font-semibold text-gray-800'>{profile?.university || "Not available"}</p>
            </div>
            <div className='rounded-3xl bg-secondary p-5'>
              <p className='text-sm font-medium text-gray-500'>Company</p>
              <p className='mt-2 text-lg font-semibold text-gray-800'>{profile?.company?.name || "Not available"}</p>
            </div>
          </div>

          <div className='mt-6 rounded-3xl border border-dashed border-brand/30 bg-brand/5 p-5'>
            <div className='flex items-start gap-3'>
              <LuUserRound className='mt-1 text-xl text-brand' />
              <div>
                <p className='text-base font-semibold text-gray-800'>Profile status</p>
                <p className='mt-1 text-sm leading-6 text-gray-600'>
                  {isLoading && "Refreshing your profile details from the API..."}
                  {isError &&
                    "We could not refresh the latest profile details right now, so the saved session data is being shown instead."}
                  {!isLoading &&
                    !isError &&
                    "Your profile is loaded from the authenticated DummyJSON endpoint and available only after login."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
