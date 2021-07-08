import React, {ChangeEvent, useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {CardPacksType, packsAPI} from "../../api/api";
import {
    addNewPack,
    deletePack,
    fetchPacksThunk,
    setFilterPacksName,
    setSortPacks,
    updatedPacksTitle
} from "../../bll/packsReduser";
import {AppStoreType} from "../../bll/store";
import {Paginator} from "../paginator/Paginator";
import {AddPack} from "./add_pack_modal/AddPack";
import {Pack} from "./pack/Pack";

export const Packs = React.memo(() => {
    const dispatch = useDispatch();
    const packs = useSelector<AppStoreType, Array<CardPacksType>>((state) => state.packs.packs);
    const page = useSelector<AppStoreType, number>((state) => state.packs.page);
    const pageCount = useSelector<AppStoreType, number>((state) => state.packs.pageCount);
    const packsName = useSelector<AppStoreType, string>((state) => state.packs.packsName);
    const sortPack = useSelector<AppStoreType, string>((state) => state.packs.sortPack);
    const [editMode, setEditMode] = useState(false);
    const [searchValue, setSearchValue] = useState("");


    useEffect(() => {
        dispatch(fetchPacksThunk(page, pageCount, packsName, sortPack));
    }, [dispatch, page, pageCount, packsName, sortPack]);

    const addPackHandle = () => {
        setEditMode(true);
    };

    const findePacksButon = () => {
        dispatch(setFilterPacksName(searchValue))
        // packs.filter(pack => pack.name && pack.name.includes(search))
        // console.log('searchValue' , searchValue)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value)
    }


    let removePack = useCallback(
        (id: string) => {
            dispatch(deletePack(id));
        },
        [dispatch]
    );

    let addNewPackHandle = useCallback(
        (title: string) => {
            dispatch(addNewPack(title));
        },
        [dispatch]
    );

    let addNewPackTitle = useCallback(
        (id: string, newTitle: string) => {
            dispatch(updatedPacksTitle(id, newTitle));
        },
        [dispatch]
    );

    const sortUP = () => {
        dispatch(setSortPacks('1cardsCount'))
    }
    const sortDown = () => {
        dispatch(setSortPacks('0cardsCount'))
    }

    return (
        <>
            <div>
                <input type="search" value={searchValue} onChange={onChangeHandler}/>
                <button onClick={findePacksButon}>search</button>
                <button onClick={addPackHandle}>Add new pack</button>
            </div>
            {editMode && <AddPack addPack={addNewPackHandle}/>}
            {packs.map((p) => {
                return <Pack key={p._id} pack={p} removePack={removePack} addNewTite={addNewPackTitle}/>;
            })}

            <span>
                <div>
                    <button onClick={sortUP}>sort up</button>
                </div>
                <div>
                    <button onClick={sortDown}>sort down</button>
                </div>
            </span>

            <Paginator page={page} pageCount={pageCount}/>
        </>
    );
});
