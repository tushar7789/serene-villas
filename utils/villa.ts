import useVillaDataStore from "../store/villaDataStore";

export const fetchAllVillasFunction = async () => {
    const setAllVillas = useVillaDataStore.getState().setAllVillas;

    try 
    {
        const res = await fetch("http://localhost:3000/api/villas");
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        setAllVillas({Villas : data["allVillas"], isLoading: false});
        console.log("v list:", data["allVillas"]);
    } catch (error) {
        console.error("Failed to fetch villas:", error);
    }
}