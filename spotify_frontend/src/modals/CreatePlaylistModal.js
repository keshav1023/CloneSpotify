import TextInput from "../components/shared/TextInput";

const CreatePlaylistModal = ({closeModal})=> {
    return (
        <div className="absolute bg-black w-screen h-screen bg-opacity-70 flex justify-center items-center"
            onClick={closeModal}
        >
            <div className="bg-app-black w-1/3 rounded-md p-8" onClick={(e)=>{
                e.stopPropagation();
            }}>
                <div className="text-white mb-5 font-semibold text-lg">Create Playlist</div>
                <div className="space-y-4 flex flex-col justify-center items-center">
                    <TextInput
                        label="Name"
                        labelClassName="text-white"
                        placeholder="Playlist Name"
                        // value=""
                        // setValue=""
                    />
                    <TextInput
                        label="Thumbnail"
                        labelClassName="text-white"
                        placeholder="Thumbnail"
                        // value=""
                        // setValue=""
                    />
                    <div className="bg-white w-1/4 rounded-md flex justify-center items-center font-semibold py-3 mt-4 cursor-pointer ">Create</div>
                </div>
            </div>
        </div>
    );
};

export default CreatePlaylistModal;