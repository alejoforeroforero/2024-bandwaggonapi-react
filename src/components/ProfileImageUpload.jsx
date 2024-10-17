import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadProfileImage } from "@/redux/states/authActions";

const ProfileImageUpload = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      dispatch(uploadProfileImage(file));
      setFile(null);
    }
  };

  return (
    <div className="update-profile-img">
      <p>Update Profile Picture</p>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="file"
            id="profile-picture"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        {file && (
          <button type="submit" disabled={!file || status === "loading"}>
            {status === "loading" ? "Uploading..." : "Upload"}
          </button>
        )}
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default ProfileImageUpload;
