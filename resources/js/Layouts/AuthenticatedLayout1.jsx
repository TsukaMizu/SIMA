import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";

function AuthenticatedLayout1({ header, children, role }) {
    const user = usePage().props.auth.user;
    const roles = role;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    const getDashboardRoute = () => {
        if (roles.includes("Helper")) {
            return route("dashboard.helper");
        } else if (roles.includes("Officer")) {
            return route("dashboard.officer");
        } else if (roles.includes("Asisten Manager")) {
            return route("dashboard.asistenmanager");
        } else if (roles.includes("Manager")) {
            return route("dashboard.manager");     
        } else if (roles.includes("pilihrole")) {
            return route("pilihrole.index");
        }
    };

    // Menentukan menu berdasarkan role
    const renderNavItemsByRole = () => {
        if (roles.includes("Helper")) {
            return (
                <>
                    <NavLink
                        href={route("dashboard.helper")}
                        active={route().current("dashboard.helper")}
                    >
                        Dashboard
                    </NavLink>
                </>
            );
        } else if (roles.includes("Officer")) {
            return (
                <>
                    <NavLink
                        href={route("dashboard.officer")}
                        active={route().current("dashboard.officer")}
                    >
                        Dashboard
                    </NavLink>
                    <NavLink
                        href={route("kelolaKaryawan.officer")}
                        active={route().current("kelolaKaryawan.officer")}
                    >
                        Kelola Karyawan
                    </NavLink>
                </>
            );
        } else if (roles.includes("Asisten Manager")) {
            return (
                <>
                    <NavLink
                        href={route("dashboard.asistenmanager")}
                        active={route().current("dashboard.asistenmanager")}
                    >
                        Dashboard
                    </NavLink>
                </>
            );
        } else if (roles.includes("Manager")) {
            return (
                <>
                    <NavLink
                        href={route("dashboard.manager")}
                        active={route().current("dashboard.manager")}
                    >
                        Dashboard
                    </NavLink>
                </>
            );
        }
    };

    return (
        <div className="container mx-auto p-6">
            <nav className="border-b border-gray-300 bg-white font-poppins mb-4 ">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-20 justify-between">
                        <div className="flex shrink-0 items-center ">
                            {/* <Link href={getDashboardRoute()}>
                                <img
                                    src={logoImage}
                                    alt=""
                                    className="w-[200px]"
                                />
                            </Link> */}
                        </div>

                        {/* Tampilkan item menu berdasarkan role */}
                        <div className="flex shrink-0 items-center gap-10">
                            {renderNavItemsByRole()}
                        </div>

                        <div className="hidden sm:ms-6 sm:flex sm:items-center">
                            <div className="relative ms-3">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-black transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none "
                                            >
                                                SIMA
                                                <svg
                                                    className="-me-0.5 ms-2 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("profile.edit")}
                                        >
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-me-2 flex items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState
                                    )
                                }
                                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none dark:text-gray-500 dark:hover:bg-gray-900 dark:hover:text-gray-400 dark:focus:bg-gray-900 dark:focus:text-gray-400"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " sm:hidden"
                    }
                >
                    <div className="space-y-1 pb-3 pt-2">
                        <ResponsiveNavLink
                        // href={route("dashboard")}
                        // active={route().current("dashboard")}
                        >
                            Dashboard
                        </ResponsiveNavLink>
                    </div>

                    <div className="border-t border-gray-200 pb-1 pt-4 dark:border-gray-600">
                        <div className="px-4">
                            <div className="text-base font-medium text-gray-800 dark:text-gray-200">
                                {user.name}
                            </div>
                            <div className="text-sm font-medium text-gray-500">
                                {user.email}
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route("profile.edit")}>
                                Profile
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                method="post"
                                href={route("logout")}
                                as="button"
                            >
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="">{children}</main>
        </div>
    );
}

export default AuthenticatedLayout1;
