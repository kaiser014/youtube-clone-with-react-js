import { useState } from "react";
const SearchBar = ({ onSubmitText }) => {
    const [searchText, setSearchText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        searchText !== '' && onSubmitText(searchText);
    }
    const searchVideo = () => {
        setSearchText('');
    }
    const setText = (e) => {
        e.preventDefault();
        setSearchText(e.target.value);
    }
    return (
        <div className="">
            <form onSubmit={onSubmit}>
                <input type="text" class="form-control" placeholder="Search your video" onChange={setText} onClick={searchVideo}/>
            </form>
        </div>
    )
}
export default SearchBar;