import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { fetchAlbums } from '../store/album-actions';
import { useState, useEffect } from 'react'
import './Album.css'

const Album = () => {
    const [search, setSearch] = useState("");
    const [index, setIndex] = useState(10)
    const [isCompleted, setIsCompleted] = useState(false)
    const [limit, setLimit] = useState(10);
    const dispatch = useAppDispatch();
    const allalbums = useAppSelector(state => state.album.all_albums);
    const searchHandler = (e: any) => {
        e.preventDefault();
        setIsCompleted(false)
        setIndex(index)
        setLimit(10);
        dispatch(fetchAlbums(search))
    }

    const showMoreDocuments = () => {
        setIndex(index + 10)
        setLimit(limit + 10);
        if (index >= allalbums.length) {
            setIsCompleted(true)
          } else {
            setIsCompleted(false)
          }
    };


    const getData = () => {
        dispatch(fetchAlbums(search))
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-8">
                    <form className="card card-sm">
                        <div className="card-body row no-gutters align-items-center">
                            <div className="col-auto">
                                <i className="fas fa-search h4 text-body"></i>
                            </div>
                            <div className="col">
                                <input onChange={(e) => { setSearch(e.target.value) }} className="form-control form-control-lg form-control-borderless" type="search" value={search} placeholder="Search Artists, Albums, and/or Songs" />
                            </div>
                            <div className="col-auto">
                                <button className="btn btn-lg btn-success" onClick={searchHandler}>Search</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="h-100 d-flex align-items-center justify-content-center">
                <div>
                    <br />
                    <h3 className="text-center">{allalbums.length} results found:</h3>
                    <div className="row">
                        <div className="col">Artist Name</div>
                        <div className="col">Collection Name</div>
                        <div className="col">Track Name</div>

                    </div>
                    <br />
                    {
                        allalbums.slice(0, limit).map((album) => (
                            <div
                                className="mb-3 card bg-primary p-2 text-dark bg-opacity-25 fixed"
                            >
                                <div className="row">
                                    <div className="col">{album.artistName}</div>
                                    <div className="col">{album.collectionName}</div>
                                    <div className="col">{album.trackName}</div>

                                </div>
                            </div>
                        ))
                    }
                    <div className="d-grid mt-3 mb-5">
                            {allalbums.length>10&&!isCompleted ?<button onClick={showMoreDocuments} type="button" className="btn btn-danger">
                                Load More +
                            </button>:""}
                    </div>
                </div>
            </div>
        </>

    );
}
export default Album;