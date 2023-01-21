import {
  Section,
  ContainerSection,
  RowSection,
  SectionTitle,
  DatePicker,
  Column,
  NumberInput,
} from "~/components";
import { t, imageBuilder } from "~/utils";
import styles1 from "~/styles/calendar.css";
import { useEffect, useState } from "react";
import moment from "moment-jalaali";
// import { CalendarTileProp } from "~/types";
import { Calendar } from "react-modern-calendar-datepicker";
import styles2 from "react-modern-calendar-datepicker/lib/DatePicker.css";
import { v4 } from "uuid";

type dateType = {
  day: number;
  month: number;
  year: number;
};

export function links() {
  return [
    { rel: "stylesheet", href: styles1 },
    { rel: "stylesheet", href: styles2 },
  ];
}
export default function PeriodCalculator() {
  const [openCalendars, setOpenCalendars] = useState(false);
  const [periodLong, setPeriodLong] = useState(3);
  const [periodCycle, setPeriodCycle] = useState(28);
  const [date, setDate] = useState<Date>();
  const [selectedDay, setSelectedDay] = useState<dateType>();
  const [range, setRange] = useState([]);
  const [rangeTwo, setRangeTwo] = useState([]);
  const [rangeThree, setRangeThree] = useState([]);
  const [warning, setWarning] = useState(false);
  const [extendForRange, setExtendForRange] = useState([]);
  const [extendForRangeTwo, setExtendForRangeTwo] = useState([]);
  const [extendForRangeThree, setExtendForRangeThree] = useState([]);
  const [extendForRangeFour, setExtendForRangeFour] = useState([]);
  const [ovulationOne, setOvulationOne] = useState([]);
  const [ovulationTwo, setOvulationTwo] = useState([]);
  const [ovulationThree, setOvulationThree] = useState([]);
  const calendars = [range, rangeTwo, rangeThree];
  const ovulations = [ovulationOne, ovulationTwo, ovulationThree];

  const [result, setResult] = useState<boolean>(false);

  useEffect(() => {
    if (!!selectedDay) {
      testCalculate(
        selectedDay,
        setRange,
        setExtendForRangeTwo,
        extendForRange
      );
      calcuateOvulation(range[0], setOvulationOne, null, setOvulationOne);
      setOpenCalendars(false);
    }
  }, [selectedDay, periodLong, periodCycle]);

  useEffect(() => {
    if (!!selectedDay) {
      testCalculate(
        range[0],
        setRangeTwo,
        setExtendForRangeThree,
        extendForRangeTwo
      );
      calcuateOvulation(
        rangeTwo[0],
        setOvulationTwo,
        ovulationOne,
        setOvulationOne
      );
    }
  }, [range]);

  useEffect(() => {
    if (!!selectedDay) {
      testCalculate(
        rangeTwo[0],
        setRangeThree,
        setExtendForRangeFour,
        extendForRangeThree
      );
      calcuateOvulation(
        rangeThree[0],
        setOvulationThree,
        ovulationTwo,
        setOvulationTwo
      );
    }
  }, [rangeTwo]);

  useEffect(() => {
    openCalendars ? scrollDown(800) : null;
  }, [openCalendars]);

  // - - - - - - - - - - - - - - - - -

  // *** Functions  ***
  function selectedDayChange(e) {
    return setSelectedDay(e);
  }

  function nextMonth(params) {
    testCalculate(
      rangeThree[0],
      setRange,
      setExtendForRange,
      extendForRangeFour
    );
    calcuateOvulation(
      rangeThree[0],
      setOvulationOne,
      ovulationOne,
      setOvulationOne
    );
  }
  function prevMonth(params) {
    testCalculate(selectedDay, setRange, setExtendForRangeTwo, extendForRange);
    calcuateOvulation(range[0], setOvulationOne, ovulationTwo, setOvulationTwo);
  }

  function firstPeriodMonth(params) {
    testCalculate(selectedDay, setRange, setExtendForRangeTwo, extendForRange);
    calcuateOvulation(range[0], setOvulationOne, ovulationTwo, setOvulationTwo);
  }

  // $$ Calculate Period For Next Month $$
  function calcuateOvulation(
    firstDayofPeriod,
    ovulationMonth,
    previousOvulation,
    setPreOvulation
  ) {
    var ovulationDays = [];
    for (let index = 0; index < 7; index++) {
      ovulationDays[index] = {
        year: firstDayofPeriod?.year,
        month: firstDayofPeriod?.month,
        day: firstDayofPeriod?.day - index - 14,
        className: "ovulation",
      };
    }

    const preMonthDays = ovulationDays.filter((item) => item.day < 1);
    let daysOfMonth;
    let firstMonthOfYear;
    let lastMonthOfYear;
    preMonthDays[0]?.month > 6 ? (daysOfMonth = 30) : (daysOfMonth = 10);
    if (preMonthDays[0]?.month === 1) {
      firstMonthOfYear = 12;
    } else {
      firstMonthOfYear = 0;
    }
    preMonthDays[0]?.month === 1
      ? (lastMonthOfYear = 1)
      : (lastMonthOfYear = 0);
    const aaa = [];

    for (let index = 0; index < preMonthDays.length; index++) {
      aaa[index] = {
        year: preMonthDays[0]?.year - lastMonthOfYear,
        month: preMonthDays[0]?.month - 1 + firstMonthOfYear,
        day: daysOfMonth - index,
        className: "ovulation",
      };
    }
    let finalov = previousOvulation?.concat(aaa);
    setPreOvulation(finalov);
    return ovulationMonth(ovulationDays);
  }

  function testCalculate(
    selectedDate,
    setRanged,
    setExtendForRangeTwo,
    rangeOneExtended
  ) {
    let lengthOfMonth = 32;
    let b = 0;
    let c = 1;
    if (selectedDate.month > 6) {
      lengthOfMonth = 31;
      b = 0;
      if (selectedDate.month === 12) {
        lengthOfMonth = 30;
        b = 1;
        c = 0;
      }
    }
    let rangeOneInitial = [];
    let rangeOneExtend = rangeOneExtended;
    let rangeTwoExtend = [];
    let rangeOneFinal = []; // concated range one & extend one
    if (selectedDate.day + periodCycle < lengthOfMonth) {
      for (let index = 0; index < periodLong; index++) {
        rangeOneInitial[index] = {
          year: selectedDate.year,
          month: selectedDate.month,
          day: selectedDate.day + periodCycle + index,
        };
        rangeOneExtend[index] = {
          year: selectedDate.year,
          month: selectedDate.month,
          day: selectedDate.day + index,
        };
      }
      rangeOneFinal = rangeOneFinal.concat(
        rangeOneInitial,
        rangeOneExtend,
        extendForRange
      );
      setExtendForRangeTwo([]);
      setRanged(rangeOneFinal);
      if (selectedDate.day + periodCycle + periodLong > lengthOfMonth) {
        function isCherries(fruit) {
          return fruit.day > lengthOfMonth - 1;
        }
        let extendTwoLenght = rangeOneInitial.filter(isCherries).length;
        for (let index = 0; index < extendTwoLenght; index++) {
          rangeTwoExtend[index] = {
            year: selectedDate.year + b,
            month: selectedDate.month * c + 1,
            day: index + 1,
          };
        }
        setExtendForRangeTwo(rangeTwoExtend);
      }
    } else {
      for (let index = 0; index < periodLong; index++) {
        rangeOneInitial[index] = {
          year: selectedDate.year + b,
          month: selectedDate.month * c + 1,
          day: selectedDate.day + periodCycle + index - lengthOfMonth + 1,
        };
      }
      rangeOneFinal = rangeOneFinal.concat(
        rangeOneInitial,
        rangeOneExtend,
        extendForRange
      );
      setRanged(rangeOneFinal);
      if (
        selectedDate.day + periodCycle + periodLong <
        lengthOfMonth + lengthOfMonth
      ) {
        setExtendForRangeTwo([]);
        if (selectedDate.day + periodLong > lengthOfMonth) {
          let lengthExtendOne = selectedDate.day + periodLong - lengthOfMonth;
          for (let index = 0; index < lengthExtendOne; index++) {
            rangeOneExtend[index] = {
              year: selectedDate.year + b,
              month: selectedDate.month * c + 1,
              day: index + 1,
            };
          }
          rangeOneFinal = rangeOneFinal.concat(
            rangeOneInitial,
            rangeOneExtend,
            extendForRange
          );
          setRanged(rangeOneFinal);
        }
      } else {
        if (selectedDate.day + periodLong > lengthOfMonth) {
          let lengthExtendOne = selectedDate.day + periodLong - lengthOfMonth;
          for (let index = 0; index < lengthExtendOne; index++) {
            rangeOneExtend[index] = {
              year: selectedDate.year + b,
              month: selectedDate.month * c + 1,
              day: index + 1,
            };
          }
          rangeOneFinal = rangeOneFinal.concat(
            rangeOneInitial,
            rangeOneExtend,
            extendForRange
          );
          setRanged(rangeOneFinal);
        }
        let lengthExtendTwo = range[0]?.day + periodLong - lengthOfMonth;
        for (let index = 0; index < lengthExtendTwo; index++) {
          rangeTwoExtend[index] = {
            year: selectedDate.year + b,
            month: selectedDate.month * c + 2,
            day: index + 1,
          };
        }
        setExtendForRangeTwo(rangeTwoExtend);
        if (selectedDate.month === 11) {
          for (let index = 0; index < lengthExtendTwo + 1; index++) {
            rangeTwoExtend[index] = {
              year: selectedDate.year + 1,
              month: 1,
              day: index + 1,
            };
          }
          setExtendForRangeTwo(rangeTwoExtend);
        }
        if (selectedDate.month === 12) {
          let ab = range[0].day + periodLong - 1 - 31;
          var rangeTwoExtended = [];
          for (let index = 0; index < ab - 1; index++) {
            rangeTwoExtended[index] = {
              year: selectedDate.year + 1,
              month: 2,
              day: index + 1,
            };
          }
          setExtendForRangeTwo(rangeTwoExtended);
        }
      }
    }
  }

  // $$ Period duration Plus & Neg Functions $$
  const migrateDate = (date: Date): dateType => {
    const _date = moment(date);
    return {
      day: _date.date(),
      month: _date.month(),
      year: _date.year(),
    };
  };
  function periodLongPlus() {
    periodLong < 10 ? setPeriodLong(periodLong + 1) : null;
  }

  function periodLongNeg() {
    periodLong > 1 ? setPeriodLong(periodLong - 1) : null;
  }

  // $$ Period Cycle Plus & Neg Functions $$
  function periodCyclePlus() {
    periodCycle < 35 ? setPeriodCycle(periodCycle + 1) : null;
  }

  function periodCycleNeg() {
    periodCycle > 21 ? setPeriodCycle(periodCycle - 1) : null;
  }

  function submitCalculate() {
    if (!selectedDay) {
      return setWarning(true);
    } else {
      testCalculate(
        selectedDay,
        setRange,
        setExtendForRangeTwo,
        extendForRange
      );
      setWarning(false);
      setOpenCalendars(true);
      scrollDown(800);
    }
  }

  function scrollDown(int: number) {
    return window.scroll({
      top: int,
    });
  }

  return (
    <div className="">
      <Section>
        <ContainerSection className="md:mt-20">
          <RowSection className="relative ">
            <SectionTitle
              subTitle={t("PREGNANCY_TITLE")}
              subTitleClass="text-gray-G1 font-bold text-4xl"
              description={t("PREGNANCY_DESCRIPTION")}
              descriptionClass="text-base font-normal mt-7 text-gray-G2"
            />
          </RowSection>
          <RowSection className="relative flex justify-end items-center mt-20 md:mt-0">
            <div className="relative">
              <img src={imageBuilder("PERIOD_TITLE")} alt="" />
            </div>
          </RowSection>
        </ContainerSection>
      </Section>
      <Section className="text-center mt-32">
        <div className="flex justify-center md:justify-between flex-wrap space-y-10 md:space-y-0">
          <Column title="When did your last period start?" number={1}>
            <DatePicker
              onChange={(date) => {
                setSelectedDay(migrateDate(date));
                setDate(date);
              }}
              maxDate={new Date()}
              value={date}
            />
          </Column>
          <Column title="How many periodLong did it last?" number={2}>
            <NumberInput amount={periodLong} setAmount={setPeriodLong} />
          </Column>
          <Column title="Average cycle length (periodLong)" number={3}>
            <NumberInput amount={periodCycle} setAmount={setPeriodCycle} />
          </Column>
        </div>
        {!!warning && <p> Didn't enter the previous period date </p>}

        <button
          onClick={() => {
            submitCalculate();
            setResult(true);
          }}
          className="period-button"
        >
          Calculate
        </button>
      </Section>
      {openCalendars && (
        <Section className="mt-10">
          <div className="flex space-y-10 justify-center items-center md:space-y-0 md:space-x-3 flex-wrap md:flex-nowrap">
            {calendars.map((item, index) => (
              <Calendar
                key={v4()}
                colorPrimary="#4ed6fd"
                colorPrimaryLight="whitesmoke"
                value={calendars[index]}
                customDaysClassName={ovulations[index]}
                shouldHighlightWeekends
                // locale="fa"
              />
            ))}
          </div>
          <div className="flex flex-wrap justify-center mt-14 space-y-2 md:space-y-0">
            <button
              onClick={nextMonth}
              className="py-5 px-5 bg-purple-P3 text-white rounded-full text-xl font-medium"
            >
              {t("PERIOD_CALCULATOR_NEXT")}
            </button>
            <button
              onClick={firstPeriodMonth}
              className="py-5 px-9 md:mx-4 bg-purple-P2 text-white rounded-full text-xl font-medium"
            >
              {t("PERIOD_CALCULATOR_CURRENT")}
            </button>
            {/* <button className="py-5 px-5 bg-purple-P3 text-white rounded-full text-xl font-medium">
              {t("PERIOD_CALCULATOR_PREV")}
            </button> */}
          </div>
          <div className="flex space-x-2 mt-28 justify-center">
            <Pallete color="#FF7878" text="Period" />
            <Pallete color="#9E81EC" text="Anticipated ovulation" />
          </div>
          <p className="mt-5 text-center text-purple-P3 text-lg ">
            Note that this calculation is approximate and should not be used to
            treat or prevent pregnancy.
          </p>
        </Section>
      )}
    </div>
  );
}
const Pallete = ({ color, text }: { text: string; color: string }) => {
  return (
    <div className="flex items-center">
      <div className="w-9 h-9 rounded-full" style={{ background: color }}></div>
      <span className="pl-2 text-sm font-normal">{text}</span>
    </div>
  );
};
