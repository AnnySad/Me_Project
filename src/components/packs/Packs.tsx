import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardPacksType } from "../../api/api";
import { addNewPack, deletePack, fetchPacksThunk, updatedPacksTitle } from "../../bll/packsReduser";
import { AppStoreType } from "../../bll/store";
import { AddPack } from "./add_pack_modal/AddPack";
import { Pack } from "./pack/Pack";

export const Packs = () => {
  const dispatch = useDispatch();
  const packs = useSelector<AppStoreType, Array<CardPacksType>>((state) => state.packs);
  const [editMode, setEditMode] = useState(false);
  useEffect(() => {
    dispatch(fetchPacksThunk());
  }, [dispatch]);

  const addPackHandle = () => {
    setEditMode(true);
  };

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

  return (
    <>
      <div>
        <input type="search" />
        <button onClick={addPackHandle}>Add new pack</button>
      </div>
      {editMode && <AddPack addPack={addNewPackHandle} />}
      {packs.map((p) => {
        return (
          <Pack key={p._id} pack={p} removePack={removePack} addNewTite={addNewPackTitle} />
          // <div>
          //   <div key={p._id}>{p.name}</div>
          //   <div>
          //     <button onClick={removePack}>Delete</button>
          //     <button>Edit</button>
          //     <button>Learn</button>
          //   </div>
          // </div>
        );
      })}
    </>
  );
};
