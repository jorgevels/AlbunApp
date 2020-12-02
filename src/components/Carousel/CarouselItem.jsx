import React from "react";
import PropTypes from "prop-types";
import "./CarouselItem.scss";

const CarouselItem = ({
  titleOne,
  giftedBy,
  answerGift,
  theDay,
  answerDay,
  titleTwo,
  born,
  answerBorn,
  city,
  answerCity,
  namesParents,
  answerParents,
  measure,
  answerMeasure,
  myWeight,
  answerWeight,
  birthTime,
  answerTime,
  cover,
  titleTwentyFour,
  biographys,
  biographys1,
  biographys2,
  biographys3,
  biography,
  biography1,
  biography2,
  biography3,

  titleThree,
  christening,
  christeningDate,
  church,
  nameChurch,
  godfather,
  nameGodfather,
  godmother,
  nameGodmother,

  titleFours,
  titleFour,
  sleep,
  answerSleep,
  myFood,
  answerMyFood,
  lull,
  answerlull,
  theyChanged,
  answerTheyChanged,
  titleFite,
  coverGrandfatherFather,
  coverGrandmotherFather,
  coverGrandfatherMother,
  coverGrandmotherMother,
  father,
  mother,
  i,
  titleSixs,
  titleSix,
  registryNumber,
  answerregistryNumber,
  notaria,
  answerNotaria,
  address,
  answerAnddress,
  cityRegistry,
  answerCityRegistry,
  dateRegistry,
  answerDateRegistry,

  titleSeven,
  titleEights,
  titleEight,
  weightAndMeasurements,
  firstMonth,
  answerFirstMonth,
  towtMonth,
  answerTowtMonth,
  sixtMonth,
  answerSixtMonth,
  niceMonth,
  answerNiceMonth,
  titleNices,
  titleNice,
  celebrated,
  answerCelebrated,
  congratulated,
  answerCongratulated,
  titleTen,
  answerAccompanied,
  titleEleven,
  answerGiftsOne,
  answerGiftsTwo,
  answerGiftsThree,
  answerGiftsFour,

  titleTwelves,
  titleTwelve,
  answerDislike,
  titleThirteen,
  answerBathroom,
  titleFourteen,
  answerDamaged,

  titleFifteen,
  startCrawling,
  answerStartCrawling,
  inPresence,
  answerInPresence,
  firstShower,
  answerFirstShower,
  accompany,
  answerAccompany,

  titleSixteen,
  christmasCelebration,
  answerChristmasCelebration,
  weHavePassed,
  answerWeHavePassed,
  titleSeventeen,
  IwasGiven,
  anwerIwasGivenOne,
  anwerIwasGivenTwo,
  anwerIwasGivenThree,
  anwerIwasGivenFour,

  titleeighteen,
  theDays,
  answerTheday,
  together,
  answerTogether,
  happy,
  asnswerHappy,

  titleNineteen,
  colleagues,
  answerColleagues,
  gardenName,
  answerGardenName,
  schoolName,
  answerSchoolName,
  teacherName,
  answeTeacherName,

  titleTwentys,
  titleTwenty,
  AnswerAnecdotes,
  titleTwentyOne,
  walk,
  answerWalk,
  iWentWith,
  answerIWentWith,

  titleTwentyTwo,
  titleTwentyThrees,
  titleTwentyThree,

  title,
  year,
  contentRating,
  duration,
}) => (
  <div className="carousel-item">
    <img className="carousel-item__img" src={cover} alt={title} />
    <div className="carousel-item__details">
      <p className="carousel-item__details--titleOne">{titleOne}</p>

      <div className="regaladoPOR">
        <p className="carousel-item__details--giftedBy">{giftedBy}</p>
        <p className="carousel-item__details--answerGift">{answerGift}</p>
      </div>
      <div className="elDia">
        <p className="carousel-item__details--theDay">{theDay}</p>
        <p className="carousel-item__details--answerDay">{answerDay}</p>
      </div>
      <p className="carousel-item__details--titleTwo">{titleTwo}</p>
      <div className="naci">
        <p className="carousel-item__details--born">{born}</p>
        <p className="carousel-item__details--answerBorn">{answerBorn}</p>
      </div>
      <div className="city">
        <p className="carousel-item__details--city">{city}</p>
        <p className="carousel-item__details--answerCity">{answerCity}</p>
      </div>
      <div className="nameParants">
        <p className="carousel-item__details--namesParents">{namesParents}</p>
        <p className="carousel-item__details--answerParents">{answerParents}</p>
      </div>
      <div className="measure">
        <p className="carousel-item__details--measure">{measure}</p>
        <p className="carousel-item__details--answerMeasure">{answerMeasure}</p>
      </div>
      <div className="myWeight">
        <p className="carousel-item__details--myWeight">{myWeight}</p>
        <p className="carousel-item__details--answerWeight">{answerWeight}</p>
      </div>
      <div className="birthTime">
        <p className="carousel-item__details--birthTime">{birthTime}</p>
        <p className="carousel-item__details--answerTime">{answerTime}</p>
      </div>
      <p className="carousel-item__details--titleThree">{titleThree}</p>
      <div className="christening">
        <p className="carousel-item__details--christening">{christening}</p>
        <p className="carousel-item__details--christeningDate">
          {christeningDate}
        </p>
      </div>
      <div className="church">
        <p className="carousel-item__details--church">{church}</p>
        <p className="carousel-item__details--nameChurch">{nameChurch}</p>
      </div>
      <div className="godfather">
        <p className="carousel-item__details--godfather">{godfather}</p>
        <p className="carousel-item__details--nameGodfather">{nameGodfather}</p>
      </div>
      <div className="godmother">
        <p className="carousel-item__details--godmother">{godmother}</p>
        <p className="carousel-item__details--nameGodmother">{nameGodmother}</p>
      </div>
      <p className="carousel-item__details--titleFours">{titleFours}</p>
      <p className="carousel-item__details--titleFour">{titleFour}</p>
      {/* Pendient4e */}
      <div className="firstDays">
        <div className="sleep">
          <p className="carousel-item__details--sleep">{sleep}</p>
          <p className="carousel-item__details--answerSleep">{answerSleep}</p>
        </div>
        <div className="myFood">
          <p className="carousel-item__details--myFood">{myFood}</p>
          <p className="carousel-item__details--answerMyFood">{answerMyFood}</p>
        </div>
        <div className="lull">
          <p className="carousel-item__details--lull">{lull}</p>
          <p className="carousel-item__details--answerlull">{answerlull}</p>
        </div>
        <div className="theyChanged">
          <p className="carousel-item__details--theyChanged">{theyChanged}</p>
          <p className="carousel-item__details--answerTheyChanged">
            {answerTheyChanged}
          </p>
        </div>
      </div>
      <p className="carousel-item__details--titleFite">{titleFite}</p>
      {/* Pendiente Borrar */}
      <div className="paternalGrandparents">
        <p className="carousel-item__details--coverGrandfatherFather">
          {coverGrandfatherFather}
        </p>
        <p className="carousel-item__details--coverGrandmotherFather">
          {coverGrandmotherFather}
        </p>
      </div>
      <div className="maternalGrandparents">
        <p className="carousel-item__details--coverGrandfatherMother">
          {coverGrandfatherMother}
        </p>
        <p className="carousel-item__details--coverGrandmotherMother">
          {coverGrandmotherMother}
        </p>
      </div>
      <div className="parents">
        <p className="carousel-item__details--father">{father}</p>
        <p className="carousel-item__details--mother">{mother}</p>
      </div>
      <p className="carousel-item__details--i">{i}</p>
      <p className="carousel-item__details--titleSixs">{titleSixs}</p>
      <p className="carousel-item__details--titleSix">{titleSix}</p>
      <div className="documents">
        <div className="documentsRegistryNumber">
          <p className="carousel-item__details--registryNumber">
            {registryNumber}
          </p>
          <p className="carousel-item__details--answerregistryNumber">
            {answerregistryNumber}
          </p>
        </div>
        <div className="documentsNotaria">
          <p className="carousel-item__details--notaria">{notaria}</p>
          <p className="carousel-item__details--answerNotaria">
            {answerNotaria}
          </p>
        </div>
        <div className="documentsAddress">
          <p className="carousel-item__details--address">{address}</p>
          <p className="carousel-item__details--answerAnddress">
            {answerAnddress}
          </p>
        </div>
        <div className="documentsCityRegistry">
          <p className="carousel-item__details--cityRegistry">{cityRegistry}</p>
          <p className="carousel-item__details--answerCityRegistry">
            {answerCityRegistry}
          </p>
        </div>
        <div className="documentsDateRegistry">
          <p className="carousel-item__details--dateRegistry">{dateRegistry}</p>
          <p className="carousel-item__details--answerDateRegistry">
            {answerDateRegistry}
          </p>
        </div>
      </div>
      <p className="carousel-item__details--titleSeven">{titleSeven}</p>
      <p className="carousel-item__details--titleEights">{titleEights}</p>
      <p className="carousel-item__details--titleEight">{titleEight}</p>
      <p className="carousel-item__details--weightAndMeasurements">
        {weightAndMeasurements}
      </p>
      <div className="weightAndMeasurements">
        <div className="firstMonth">
          <p className="carousel-item__details--firstMonth">{firstMonth}</p>
          <p className="carousel-item__details--answerFirstMonth">
            {answerFirstMonth}
          </p>
        </div>
        <div className="towtMonth">
          <p className="carousel-item__details--towtMonth">{towtMonth}</p>
          <p className="carousel-item__details--answerTowtMonth">
            {answerTowtMonth}
          </p>
        </div>

        <div className="sixtMonth">
          <p className="carousel-item__details--sixtMonth">{sixtMonth}</p>
          <p className="carousel-item__details--answerSixtMonth">
            {answerSixtMonth}
          </p>
        </div>

        <div className="niceMonth">
          <p className="carousel-item__details--niceMonth">{niceMonth}</p>
          <p className="carousel-item__details--answerNiceMonth">
            {answerNiceMonth}
          </p>
        </div>
      </div>
      <p className="carousel-item__details--titleNices">{titleNices}</p>
      <p className="carousel-item__details--titleNice">{titleNice}</p>
      <div className="birthday">
        <div className="celebrated">
          <p className="carousel-item__details--celebrated">{celebrated}</p>
          <p className="carousel-item__details--answerCelebrated">
            {answerCelebrated}
          </p>
        </div>

        <div className="congratulated">
          <p className="carousel-item__details--congratulated">
            {congratulated}
          </p>
          <p className="carousel-item__details--answerCongratulated">
            {answerCongratulated}
          </p>
        </div>
        <div className="answerAccompanied">
          <p className="carousel-item__details--titleTen">{titleTen}</p>
          <p className="carousel-item__details--answerAccompanied">
            {answerAccompanied}
          </p>
        </div>
        <p className="carousel-item__details--titleEleven">{titleEleven}</p>

        <div className="answerGifts">
          {/* <div className="answerGift"> */}
          <p className="carousel-item__details--answerGiftsOne">
            {answerGiftsOne}
          </p>
          <p className="carousel-item__details--answerGiftsTwo">
            {answerGiftsTwo}
          </p>
          <p className="carousel-item__details--answerGiftsThree">
            {answerGiftsThree}
          </p>
          <p className="carousel-item__details--answerGiftsFour">
            {answerGiftsFour}
          </p>
          {/*  </div> */}
        </div>
      </div>
      <p className="carousel-item__details--titleTwelves">{titleTwelves}</p>
      <div className="answerDislike">
        <div className="start">
          <p className="carousel-item__details--titleTwelve">{titleTwelve}</p>
          <p className="carousel-item__details--answerDislike">
            {answerDislike}
          </p>
        </div>
        <div className="answerBathroom">
          <p className="carousel-item__details--titleThirteen">
            {titleThirteen}
          </p>
          <p className="carousel-item__details--answerBathroom">
            {answerBathroom}
          </p>
        </div>
        <div className="answerDamaged">
          <p className="carousel-item__details--titleFourteen">
            {titleFourteen}
          </p>
          <p className="carousel-item__details--answerDamaged">
            {answerDamaged}
          </p>
        </div>
      </div>
      <p className="carousel-item__details--titleFifteen">{titleFifteen}</p>
      <div className="importantMoments">
        <div className="startCrawling">
          <p className="carousel-item__details--startCrawling">
            {startCrawling}
          </p>
          <p className="carousel-item__details--answerStartCrawling">
            {answerStartCrawling}
          </p>
        </div>
        <div className="inPresence">
          <p className="carousel-item__details--inPresence">{inPresence}</p>
          <p className="carousel-item__details--answerInPresence">
            {answerInPresence}
          </p>
        </div>
        <div className="firstShower">
          <p className="carousel-item__details--firstShower">{firstShower}</p>
          <p className="carousel-item__details--answerFirstShower">
            {answerFirstShower}
          </p>
        </div>
        <div className="accompany">
          <p className="carousel-item__details--accompany">{accompany}</p>
          <p className="carousel-item__details--answerAccompany">
            {answerAccompany}
          </p>
        </div>
      </div>
      <p className="carousel-item__details--titleSixteen">{titleSixteen}</p>
      <div className="firstChristmas">
        <div className="christmasCelebration">
          <p className="carousel-item__details--christmasCelebration">
            {christmasCelebration}
          </p>
          <p className="carousel-item__details--answerChristmasCelebration">
            {answerChristmasCelebration}
          </p>
        </div>
        <div className="weHavePassed">
          <p className="carousel-item__details--weHavePassed">{weHavePassed}</p>
          <p className="carousel-item__details--answerWeHavePassed">
            {answerWeHavePassed}
          </p>
        </div>
      </div>
      <p className="carousel-item__details--titleSeventeen">{titleSeventeen}</p>
      <div className="gifts">
        <div className="IwasGivens">
          <p className="carousel-item__details--IwasGiven">{IwasGiven}</p>
        </div>
        <div className="IwasGiven">
          <p className="carousel-item__details--anwerIwasGivenOne">
            {anwerIwasGivenOne}
          </p>
          <p className="carousel-item__details--anwerIwasGivenTwo">
            {anwerIwasGivenTwo}
          </p>
        </div>
        <div className="IwasGivenThreeAndFour">
          <p className="carousel-item__details--anwerIwasGivenThree">
            {anwerIwasGivenThree}
          </p>
          <p className="carousel-item__details--anwerIwasGivenFour">
            {anwerIwasGivenFour}
          </p>
        </div>
      </div>
      <p className="carousel-item__details--titleeighteen">{titleeighteen}</p>
      <div className="standing">
        <div className="theDays">
          <p className="carousel-item__details--theDays">{theDays}</p>
          <p className="carousel-item__details--answerTheday">{answerTheday}</p>
        </div>
        <div className="answerTogether">
          <p className="carousel-item__details--together">{together}</p>
          <p className="carousel-item__details--answerTogether">
            {answerTogether}
          </p>
        </div>
        <div className="happy">
          <p className="carousel-item__details--happy">{happy}</p>
          <p className="carousel-item__details--asnswerHappy">{asnswerHappy}</p>
        </div>
      </div>
      <p className="carousel-item__details--tititleNineteentle">
        {titleNineteen}
      </p>
      <div className="school">
        <div className="colleagues">
          <p className="carousel-item__details--colleagues">{colleagues}</p>
          <p className="carousel-item__details--answerColleagues">
            {answerColleagues}
          </p>
        </div>
        <div className="gardenName">
          <p className="carousel-item__details--gardenName">{gardenName}</p>
          <p className="carousel-item__details--answerGardenName">
            {answerGardenName}
          </p>
        </div>
        <div className="schoolName">
          <p className="carousel-item__details--schoolName">{schoolName}</p>
          <p className="carousel-item__details--answerSchoolName">
            {answerSchoolName}
          </p>
        </div>
        <div className="teacherName">
          <p className="carousel-item__details--teacherName">{teacherName}</p>
          <p className="carousel-item__details--answeTeacherName">
            {answeTeacherName}
          </p>
        </div>
      </div>
      <p className="carousel-item__details--titleTwentys">{titleTwentys}</p>
      <p className="carousel-item__details--titleTwenty">{titleTwenty}</p>
      <div className="anecdotes">
        <div className="answerAnecdotes">
          <p className="carousel-item__details--answerAnecdotesOne">
            {AnswerAnecdotes}
          </p>
          <p className="carousel-item__details--answerAnecdotesTwo">
            {AnswerAnecdotes}
          </p>
          <p className="carousel-item__details--answerAnecdotesThree">
            {AnswerAnecdotes}
          </p>
        </div>
      </div>
      <p className="carousel-item__details--titleTwentyOne">{titleTwentyOne}</p>
      <div className="walks">
        <div className="walk">
          <p className="carousel-item__details--walk">{walk}</p>
          <p className="carousel-item__details--answerWalk">{answerWalk}</p>
        </div>
        <div className="iWentWith">
          <p className="carousel-item__details--iWentWith">{iWentWith}</p>
          <p className="carousel-item__details--answerIWentWith">
            {answerIWentWith}
          </p>
        </div>
      </div>
      <p className="carousel-item__details--titleTwentyTwo">{titleTwentyTwo}</p>
      <p className="carousel-item__details--titleTwentyFour">
        {titleTwentyFour}
      </p>

      <div className="biographys">
        <p className="carousel-item__details--biographys">{biographys}</p>
        <p className="carousel-item__details--biographys">{biographys1}</p>
        <p className="carousel-item__details--biographys">{biographys2}</p>
        <p className="carousel-item__details--biographys">{biographys3}</p>
      </div>

      <div className="biography">
        <p className="carousel-item__details--biography">{biography}</p>
        <p className="carousel-item__details--biography">{biography1}</p>
        <p className="carousel-item__details--biography">{biography2}</p>
        <p className="carousel-item__details--biography">{biography3}</p>
      </div>
      <p className="carousel-item__details--titleTwentyThrees">
        {titleTwentyThrees}
      </p>
      <p className="carousel-item__details--titleTwentyThree">
        {titleTwentyThree}
      </p>

      <p className="carousel-item__details--title">{title}</p>
      <p className="carousel-item__details--subtitle">{year}</p>
      {/* <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}</p> */}
    </div>
  </div>
);

CarouselItem.propTypes = {
  slug1: PropTypes.string,
  title1: PropTypes.string,
  date: PropTypes.string,

  title: PropTypes.string,
  year: PropTypes.string,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
  cover: PropTypes.string,
};

export default CarouselItem;
