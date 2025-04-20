import { Searchbar } from "./Searchbar"

export const NavBar = () => {
    return (
        <div className="flex justify-between pt-1 p-3">
            <div className="flex justify-between pt-1 p-3">
                Youtube
            </div>
            <div>
                <Searchbar />
            </div>
            <div>
                Sign in
            </div>
        </div>
    )
}