'use client';
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProfilePage() {
    const session = useSession();
    const [userName, setUserName] = useState('')
    const [saved, setSaved] = useState(false)
    const [isSaving, setIsSaving] = useState(false)
    const {status} = session;

    useEffect(() => {
        if (status === 'authenticated') {
            setUserName(session.data.user.name);
        }
    }, [session, status]);

    async function handleProfileInfoUpdate(ev) {
        ev.preventDefault();
        setSaved(false);
        setIsSaving(true);
        const response = await fetch('/api/profile', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: userName,
            }),
        });
        setIsSaving(false);
        if (response.ok) {
            setSaved(true);
        }
    }
    async function handleFileChange(ev) {
        const files = ev.target.files;
        if (files?.length === 1 && files) {
            const data = new FormData;
            data.set('files', files[0]);
            await fetch('/api/upload', {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                body: data,
            })
        }
    }

    if (status === 'loading') {
        return 'Loading...';
    }

    if (status === 'unauthenticated') {
        return redirect('/login');
    }

    const userImage = session.data.user.image;

    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-4">
                Profile
            </h1>
            <div className="max-w-md mx-auto">
                {saved && (
                    <h2 className="text-center bg-green-100 p-4 rounded-lg border border-green-300">
                        Profile saved!
                    </h2>
                )}
                {isSaving && (
                    <h2 className="text-center bg-red-100 p-4 rounded-lg border border-red-300">
                        Saving profile...
                    </h2>
                )}
                <div className="flex gap-4 items-center">
                    <div>
                        <div className="p-2 rounded-lg relative">
                            <Image className="rounded-lg mb-1" src={userImage} width={100} height={100} alt="avatar" />
                            <label>
                                <input type="file" className="hidden" onChange={handleFileChange}/>
                                <span className="border block border-gray-300 cursor-pointer text-center rounded-lg p-2">Edit</span>
                            </label>
                        </div>
                    </div>
                    <form className="grow" onSubmit={handleProfileInfoUpdate}>
                        <input type="text" placeholder="First and Last Name" value={userName} onChange={ev => setUserName(ev.target.value)} />
                        <input type="email" disabled={true} value={session.data.user.email}/>
                        <button type="submit">Save</button>
                    </form>
                </div>
            </div>
        </section>
    );
}