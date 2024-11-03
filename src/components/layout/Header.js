'use client';
import { useSession } from 'next-auth/react';
import Link from "next/link"
import { signOut } from 'next-auth/react';

export default function Header() {
    const session = useSession();
    console.log(session);
    const status = session.status;
    return (
        <header className="flex items-center justify-between">
            <nav className="flex gap-8 text-gray-500 font-semibold items-center">
                <Link href="/" className="text-primary font-semibold text-2xl">
                    ARIYO
                </Link>
                <Link href={'/'}>Home</Link>
                <Link href={''}>Menu</Link>
                <Link href={''}>About</Link>
                <Link href={''}>Contact</Link>
            </nav>
            <nav className="flex gap-4 text-gray-500 font-semibold items-center">
                {status === 'authenticated' && (
                    <>
                        <Link href={'/profile'}>Profile</Link>
                        <button
                        onClick={() => signOut()} 
                        className="bg-primary text-white px-8 py-2 rounded-full">
                            Logout
                        </button>
                    </>
                )}
                {status === 'unauthenticated' && (
                    <>
                        <Link href={'/login'}>Login</Link>
                        <Link href={'/register'} className="bg-primary text-white px-8 py-2 rounded-full">
                            Register
                        </Link>
                    </>
                )}
            </nav>
        </header>
    )
}