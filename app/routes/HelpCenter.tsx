import { useState } from "react";
import { v4 } from "uuid";
import {
  Blob,
  Box,
  BoxContent,
  ContainerSection,
  DownloadIcon,
  ImageBlob,
  RowSection,
  Section,
  SectionTitle,
  Tabs,
} from "~/components";
import { useWindowSize } from "~/hook";
import { t } from "~/utils";

export default function GettingStarted() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [activeBox, setActiveBox] = useState<string>();
  const { width } = useWindowSize();
  const scrollToEl = (id: string) => {
    const el = document.getElementById(id);
    if (el)
      el?.scrollIntoView({
        behavior: "smooth",
      });
  };
  return (
    <div>
      <Section>
        <ContainerSection className="md:mt-20">
          <RowSection className="relative">
            <SectionTitle
              subTitle={t("HELP_CENTER_TITLE")}
              subTitleClass="text-gray-G1 font-bold text-4xl"
              description={t("HELP_CENTER_DESCRIPTION")}
              descriptionClass="text-xl font-normal mt-7 text-gray-G2"
            />
          </RowSection>
          <RowSection className="relative flex justify-end items-center mt-20 md:mt-0">
            <div className="relative">
              <ImageBlob
                img="GETTING_STARTED"
                className="w-80"
                blobs={[
                  <Blob
                    type={3}
                    size={"100%"}
                    color="#EAEBEE"
                    className="absolute -z-10 w-full h-full -top-10 -left-10"
                    key={v4()}
                  />,
                ]}
              />
            </div>
          </RowSection>
        </ContainerSection>
      </Section>
      <Section className="mt-24">
        <div className="mb-16">
          <Tabs
            activeIndex={activeTabIndex}
            data={[
              { title: "دانلود" },
              { title: "راهنمای داشبورد" },
              {
                title: "ویرایش اطلاعات پروفایل",
              },
              {
                title: "ثبت علائم",
              },
              {
                title: "تغییر هدف",
              },
              // {
              //   title: "Reminders",
              // },
              {
                title: "کلینیک",
              },
              {
                title: "تغییر پریود",
              },
              {
                title: "اضافه‌کردن همراه",
              },
              {
                title: "ثبت یادآور",
              },
            ]}
            onChange={({ index, title }) => {
              setActiveTabIndex(index);
              width && width < 767 && setActiveBox(title);
              width && width > 767 && scrollToEl(title + "_id");
            }}
            mobilePortal
            activePortal={!!activeBox}
          />
        </div>
        <div className="flex flex-wrap md:block">
          <Box
            title={"دانلود"}
            activeBox={activeBox}
            changeActiveBox={setActiveBox}
          >
            <BoxContent image="FRAME_MAIN_DARK_HALF" key={"دانلود اندروید"}>
              <p className="text-lg font-normal text-gray-G6">
                از طریق یکی از استورهای زیر میتونید اپلیکیشن لونا رو میتونید
                دانلود کنید.
              </p>
              <DownloadIcon image="GOOGLE_PLAY" className="my-10" />
            </BoxContent>
            <BoxContent image="FRAME_MAIN_DARK_HALF" key={"IOS (کابران آیفون)"}>
              <p className="text-lg font-normal text-gray-G6">
                از طریق یکی از استورهای زیر میتونید اپلیکیشن لونا رو میتونید
                دانلود کنید.
              </p>
              <DownloadIcon image="APP_STORE" className="my-10" />
            </BoxContent>
            <BoxContent image="FRAME_MAIN_DARK_HALF" key={"نسخه وب اپلیکیشن"}>
              <p className="text-lg font-normal text-gray-G6">
                از طریق یکی از استورهای زیر میتونید اپلیکیشن لونا رو میتونید
                دانلود کنید.
              </p>
              <DownloadIcon image="APP_STORE" className="my-10" />
            </BoxContent>
          </Box>
          <Box
            title={"راهنمای داشبورد"}
            activeBox={activeBox}
            changeActiveBox={setActiveBox}
          >
            <BoxContent image="FRAME_MAIN_DARK_HALF" key={"راهنمای داشبورد"}>
              <p className="text-lg font-normal text-gray-G6 whitespace-pre-wrap">
                این دایره بر اساس اطلاعاتی که تو پروفایلت وارد کردی، مراحلی رو
                نشون میده که تو دوره پریودت طی میکنی. طول دوره‌ات ۳۱ روزه، شامل:
                - روز ۱ تا ۵ دوره: پریود میشی (‌خونریزی داری)- روز ۱۱ تا ۱۹
                دوره: پنجره باروری و تخمک‌گذاریته - روز ۲۴ تا ۳۱ دوره: سندروم
                پیش از پریودته(PMS)
              </p>
            </BoxContent>
            <BoxContent image="FRAME_MAIN_DARK_HALF" key={"نوتیفیکیشن"}>
              <p className="text-lg font-normal text-gray-G6">Notification</p>
            </BoxContent>
            <BoxContent image="FRAME_MAIN_DARK_HALF" key={"ثبت وضعیت"}>
              <p className="text-lg font-normal text-gray-G6">Notification</p>
            </BoxContent>
          </Box>
          <Box
            title={"Profile"}
            activeBox={activeBox}
            changeActiveBox={setActiveBox}
          >
            <BoxContent
              image="FRAME_MAIN_DARK_HALF"
              key={"ویرایش اطلاعات پروفایل"}
            >
              <p className="text-lg font-normal text-gray-G6">
                ۱- پس از اتمام مراحل ثبت‌نام و وارد شدن به صفحه «امروز» در
                اپلیکیشن لونا، روی عکس پروفایل خود در بالای صفحه سمت راست کلیک
                کنید. ۲- پس از وارد شدن به صفحه پروفایل، روی گزینه «ویرایش» در
                بالا سمت چپ صفحه کلیک کنید. ۳- با وارد شدن به صفحه «ویرایش
                پروفایل» امکان ویرایش «نام»،‌ «تاریخ تولد»،‌ «قد»،‌ «وزن»، «طول
                پریود» و «سیکل پریود» برای شما وجود دارد. دقت کنید که امکان
                ویرایش «شماره موبایل» وجود ندارد و در صورت نیاز به تغییر آن یا
                اکانت جدید بسازید یا در صورت نیاز به حفظ اطلاعات قبلی‌تان با
                پشتیبانی لونا تماس بگیرید.
              </p>
            </BoxContent>
            <BoxContent image="FRAME_MAIN_DARK_HALF" key={"ویرایش مشخصات"}>
              <p className="text-lg font-normal text-gray-G6">ویرایش مشخصات</p>
            </BoxContent>
            <BoxContent
              image="FRAME_MAIN_DARK_HALF"
              key={"ویرایش طول دوره (منظم و نامنظم)"}
            >
              <p className="text-lg font-normal text-gray-G6">
                Edit cycle length
              </p>
            </BoxContent>
            <BoxContent image="FRAME_MAIN_DARK_HALF" key={"ویرایش طول پریود"}>
              <p className="text-lg font-normal text-gray-G6">
                Edit cycle length
              </p>
            </BoxContent>
          </Box>
          <Box
            title={"ثبت علائم"}
            activeBox={activeBox}
            changeActiveBox={setActiveBox}
          >
            <BoxContent image="FRAME_MAIN_DARK_HALF" key={"ثبت علائم"}>
              <p className="text-lg font-normal text-gray-G6">
                ۱- پس از اتمام مراحل ثبت‌نام و وارد شدن به صفحه «امروز» یا صفحه
                «تقویم» در اپلیکیشن لونا، روی دکمه «+» کلیک کنید. ۲- در منوی
                «ثبت وضعیت جدید» روی فیلد علائمی که قصد وارد کردن آن را دارید
                کلیک کنید و پس از ثبت علامت با زدن دکمه «اضافه کردن»، علائم مورد
                نظر خود را ذخیره کنید. دقت کنید که اطلاعاتی که ثبت می‌کنید در
                تاریخی که بالا سمت راست صفحه نوشته شده است ثبت می‌شود و در صورت
                نیاز به تغییر آن، از تب «تقویم» روز مورد نظر خود را انتخاب کرده
                و سپس با کلیک روی دکمه «+» علامت را برای همان روز ثبت کنید.
              </p>
            </BoxContent>
            <BoxContent image="FRAME_MAIN_DARK_HALF" key={"ثبت تست BBT"}>
              <p className="text-lg font-normal text-gray-G6">BBT</p>
            </BoxContent>
            <BoxContent image="FRAME_MAIN_DARK_HALF" key={"ثبت تست LH"}>
              <p className="text-lg font-normal text-gray-G6">LH</p>
            </BoxContent>
            <BoxContent image="FRAME_MAIN_DARK_HALF" key={"ثبت اطلاعات پریود"}>
              <p className="text-lg font-normal text-gray-G6">Sex</p>
            </BoxContent>
            <BoxContent image="FRAME_MAIN_DARK_HALF" key={"ثبت لکه‌بینی"}>
              <p className="text-lg font-normal text-gray-G6">Spot</p>
            </BoxContent>
            <BoxContent image="FRAME_MAIN_DARK_HALF" key={"ثبت ترشحات واژن"}>
              <p className="text-lg font-normal text-gray-G6">
                vaginal discharge
              </p>
            </BoxContent>
            <BoxContent image="FRAME_MAIN_DARK_HALF" key={"ثبت وزن"}>
              <p className="text-lg font-normal text-gray-G6">Weight</p>
            </BoxContent>
            <BoxContent image="FRAME_MAIN_DARK_HALF" key={"ثبت حال روحی"}>
              <p className="text-lg font-normal text-gray-G6">Modd</p>
            </BoxContent>
            <BoxContent image="FRAME_MAIN_DARK_HALF" key={"ثبت علائم"}>
              <p className="text-lg font-normal text-gray-G6">symptoms</p>
            </BoxContent>
          </Box>
          <Box
            title={"تغییر هدف"}
            activeBox={activeBox}
            changeActiveBox={setActiveBox}
          >
            <BoxContent image="FRAME_MAIN_DARK_HALF" key={"تغییر هدف"}>
              <p className="text-3xl font-medium text-purple-P1 mb-16">
                تغییر هدف
              </p>

              <p className="text-lg font-normal text-gray-G6">
                پس از وارد شدن به صفحه هدف من، روی هدف مورد نظر خود کلیک کنید.
                در حال حاضر امکان انتخاب هدف برای «پیش‌بینی پریود» و «قصد
                بارداری» وجود دارد و برای افراد باردار هم به زودی در اپلیکیشن
                امکانات ویژه دوران بارداری قرار خواهد گرفت.
              </p>
            </BoxContent>
          </Box>

          <Box
            title={"راهنمای کلینیک لونا"}
            activeBox={activeBox}
            changeActiveBox={setActiveBox}
          >
            <BoxContent
              image="FRAME_MAIN_DARK_HALF"
              key={"راهنمای کلینیک لونا"}
            >
              <p className="text-3xl font-medium text-purple-P1 mb-16">
                راهنمای کلینیک لونا
              </p>

              <p className="text-lg font-normal text-gray-G6">
                پزشک‌ها تو کلینیک لونا ‌آماده‌اند تا ازشون مشورت تخصصی بگیری و
                خیالت راحت بشه!
              </p>
            </BoxContent>
          </Box>
          <Box
            title={"تغییر پریود"}
            activeBox={activeBox}
            changeActiveBox={setActiveBox}
          >
            <BoxContent image="FRAME_MAIN_DARK_HALF" key={"تغییر پریود"}>
              <p className="text-3xl font-medium text-purple-P1 mb-16">
                تغییر پریود
              </p>

              <p className="text-lg font-normal text-gray-G6">
                پس از اتمام مراحل ثبت‌نام و وارد شدن به صفحه «امروز» در اپلیکیشن
                لونا، روی دکمه «شروع پریود» در دایره وسط صفحه یا دکمه «+» کلیک
                کنید. در منوی «ثبت وضعیت جدید» دکمه «ثبت پریود» را بزنید. سپس
                تعداد روزهای پریود خود و تاریخ شروع آن را انتخاب کنید و دکمه
                «ثبت پریود» را بزنید.پریود شما ثبت شد و می‌توانید در تب «تقویم»
                آن را در تقویم مشاهده کنید.
              </p>
            </BoxContent>
          </Box>
          <Box
            title={"ثبت یادآور"}
            activeBox={activeBox}
            changeActiveBox={setActiveBox}
          >
            <BoxContent image="FRAME_MAIN_DARK_HALF" key={"ثبت یادآور"}>
              <p className="text-3xl font-medium text-purple-P1 mb-16">
                ثبت یادآور
              </p>

              <p className="text-lg font-normal text-gray-G6">
                پس از اتمام مراحل ثبت‌نام و وارد شدن به صفحه «امروز» در اپلیکیشن
                لونا، روی عکس پروفایل خود در بالای صفحه سمت راست کلیک کنید.پس از
                وارد شدن به صفحه پروفایل، روی گزینه «یادآوری‌های من» کلیک
                کنید.در صفحه یادآوری‌ها امکان اضافه کردن یادآور هوشمند و یادآور
                شخصی‌ساز را دارید. یادآور هوشمند به صورت خودکار قبل از روزهای
                پیش‌بینی شده برای پریود و تخمک‌گذاری شما به شما یادآوری می‌کند و
                یادآور شخصی‌ساز را می‌توانید برای تنظیم یادآور برای چکاپ‌های
                دوره‌ای یا استفاده از داروها برای خودتان تنظیم کنید.- برای ساخت
                یادآور هوشمند، در تب هوشمند، روی یکی از گزینه‌های پیش‌فرض کلیک
                کنید و با زدن دکمه «اضافه کردن یادآور»، وارد صفحه تنظیمات یادآور
                شوید و یا در صورت نیاز به ویرایش یا حذف یادآورهای قبلی، روی سه
                نقطه کلیک کنید.- برای اضافه کردن یادآور هوشمند جدید، متن دلخواه
                و زمان و ساعت مناسب برای یادآوری را وارد کنید و دکمه «ثبت» را
                بزنید تا یادآور هوشمند شما ثبت شود.- برای اضافه کردن یادآور
                هوشمند جدید، متن دلخواه و زمان و ساعت مناسب برای یادآوری را وارد
                کنید و دکمه «ثبت» را بزنید تا یادآور هوشمند شما ثبت شود.- برای
                اضافه کردن یادآور شخصی‌ساز جدید، متن دلخواه و تاریخ و ساعت مناسب
                برای یادآوری را وارد کنید و دکمه «ثبت» را بزنید تا یادآور هوشمند
                شما ثبت شود. برای یادآور شخصی‌ساز می‌توانید تکرار هفتگی یا
                ماهانه و صدای دلخواه نیز انتخاب کنید.
              </p>
            </BoxContent>
          </Box>
          <Box
            title={"اضافه کردن هم‌راه"}
            activeBox={activeBox}
            changeActiveBox={setActiveBox}
          >
            <BoxContent image="FRAME_MAIN_DARK_HALF" key={"ثبت یادآور"}>
              <p className="text-3xl font-medium text-purple-P1 mb-16">
                اضافه کردن هم‌راه
              </p>

              <p className="text-lg font-normal text-gray-G6">
                پس از اتمام مراحل ثبت‌نام و وارد شدن به صفحه «امروز» در اپلیکیشن
                لونا، روی عکس پروفایل خود در بالای صفحه سمت راست کلیک کنید. پس
                از وارد شدن به صفحه پروفایل، روی گزینه «هم‌راه من» کلیک کنید.سپس
                گزینه «افزودن هم‌راه» را بزنید.در این قسمت نام هم‌راه خود و
                شماره موبایل او را وارد کنید و دکمه «بعدی» را بزنید. در این قسمت
                می‌توانید انتخاب کنید که هم‌راه شما به چه اطلاعاتی از پروفایل
                شما دسترسی داشته باشد. گزینه‌هایی که نمی‌خواهید هم‌راه‌تون ببیند
                را در این قسمت خاموش کنید و گزینه «ثبت نهایی» را بزنید.الان دیگه
                هم‌راه شما اضافه شده و می‌تونید با اشتراک‌گذاری اپلیکیشن باهاش،
                باخبرش کنید یا ازش بخواهید که اپلیکیشن رو دانلود کنه.با برگشت به
                منوی هم‌راه من، می‌تونید مشخصات هم‌راه‌تون رو ببینید.در صورت
                نیاز برای حذف هم‌راه، روی سه نقطه مقابل اسمش کلیک کنید و پس از
                تایید، هم‌راه رو حذف کنید.
              </p>
            </BoxContent>
          </Box>
        </div>
      </Section>
    </div>
  );
}
