import quizThumbnail from "../../assets/images/unsplash_c8h0n7fSTqs.png";
import profilePic from "../../assets/svgs/avatar-default_svgrepo.com.svg";
import optionsIcon from "../../assets/svgs/options-vertical_svgrepo.com.svg";
import heartIcon from "../../assets/svgs/heart.svg"
import saveIcon from "../../assets/svgs/bookmark.svg"

export default function QuizCard() {
  return (
    <div className="cardContainer w-[256px] rounded-2xl overflow-hidden m-16 customShadow relative">
    <div className="interations flex absolute gap-4 right-4 top-3">
        <div className="likeBtnContainer flex gap-1 items-center">
            <img src={heartIcon} alt="like icon" className="h-4" />
            <div className="likesCount text-white text-xs">3.4k</div>
        </div>
        <div className="saveBtnContainer flex gap-1 items-center">
            <img src={saveIcon} alt="save icon" className="h-4" />
            <div className="saveCount text-white text-xs">2.8k</div>
        </div>
    </div>
      <div className="imageContainer h-1/2 overflow-hidden">
        <img src={quizThumbnail} alt="quiz thumbnail" className="w-full h-full" />
      </div>
      <div className="detailsSection m-3 mt-2 flex flex-col gap-2">
        <div className="quizDetails">
          <div className="heading text-2xl font-semibold">Heading</div>
          <div className="quizDiscription text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ut eligendi rem exercitationem, et quidem.
          </div>
        </div>
        <div className="quizPublisherDetails flex items-center justify-between">
          <div className="picAndUsernameContainer flex items-center gap-2">
            <div className="publisherImgContainer">
              <img src={profilePic} alt="publisher profile pic" className="w-7 border-2 border-[var(--black100)] rounded-full p-1"/>
            </div>
            <div className="publisherUsername text-md">thecky guy</div>
          </div>
          <div className="options">
            <img src={optionsIcon} alt="options icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
