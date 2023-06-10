import styles from "./navbar.module.css";
import { FcDocument } from "react-icons/fc";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { BsChatRightText } from "react-icons/bs";
import { BiFolderMinus } from "react-icons/bi";
import { BiLockAlt } from "react-icons/bi";
import { IoCloudDoneOutline } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { FaHistory } from "react-icons/fa";

export default function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.leftSide_navbar}>
          <FcDocument
            style={{ marginLeft: "15px", marginTop: "12px", cursor: "pointer" }}
            size={40}
          />
          <div className={styles.navbar_menu}>
            <div className={styles.heading}>
              Untitled document{" "}
              <IoStarOutline
                size={18}
                style={{ marginLeft: "25px", cursor: "pointer" }}
              />{" "}
              <BiFolderMinus
                style={{ marginLeft: "15px", cursor: "pointer" }}
                size={17}
              />{" "}
              <IoCloudDoneOutline
                style={{ marginLeft: "15px", cursor: "pointer" }}
                size={18}
              />
            </div>
            <div className={styles.menu}>
              <p>File</p>
              <p>Edit</p>
              <p>View</p>
              <p>Insert</p>
              <p>Format</p>
              <p>Tool</p>
              <p>Extensions</p>
              <p>Help</p>
            </div>
          </div>
        </div>
        <div className={styles.rightSide_navbar}>
          <FaHistory className={styles.FaHistory} size={20} />
          <BsChatRightText size={19} className={styles.BsChatRightText} />
          <AiOutlineVideoCamera size={21} className={styles.BsChatRightText} />
          <button className={styles.share_btn}>
            <BiLockAlt />
            Share
          </button>
          <img
            className={styles.login_img}
            src="https://tse1.mm.bing.net/th?id=OIP.IZLLSP-RG2LYdFvM_Pl1mQHaHa&pid=Api&P=0&h=180"
          />
        </div>
      </div>
    </>
  );
}
