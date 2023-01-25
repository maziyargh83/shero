import { Fragment } from "react";
import { DownloadIcon } from "~/components";
import { imagesKey } from "~/types";
import { isShero } from "~/utils";
interface helpCenterTabs {
  title: string;
  component: () => React.ReactNode;
  image: keyof typeof imagesKey;
}
interface helpCenter {
  title: string;
  tabs: helpCenterTabs[];
}
const sheroHelpCenter: helpCenter[] = [];
const lunaHelpCenter: helpCenter[] = [
  {
    title: "دانلود",
    tabs: [
      {
        title: "دانلود اندروید",
        image: "SUPPORT_FRAME_1",
        component: () => {
          return (
            <Fragment>
              <p className="text-lg font-normal text-gray-G6">
                از طریق یکی از استورهای زیر میتونید اپلیکیشن لونا رو میتونید
                دانلود کنید.
              </p>
              <DownloadIcon image="GOOGLE_PLAY" className="my-10" />
            </Fragment>
          );
        },
      },
      {
        title: "IOS (کابران آیفون)",
        image: "SUPPORT_FRAME_1",
        component: () => {
          return (
            <Fragment>
              <p className="text-lg font-normal text-gray-G6">
                از طریق یکی از استورهای زیر میتونید اپلیکیشن لونا رو میتونید
                دانلود کنید.
              </p>
              <DownloadIcon image="GOOGLE_PLAY" className="my-10" />
            </Fragment>
          );
        },
      },
      {
        title: "نسخه وب اپلیکیشن",
        image: "SUPPORT_FRAME_1",
        component: () => {
          return (
            <Fragment>
              <p className="text-lg font-normal text-gray-G6">
                از طریق یکی از استورهای زیر میتونید اپلیکیشن لونا رو میتونید
                دانلود کنید.
              </p>
              <DownloadIcon image="GOOGLE_PLAY" className="my-10" />
            </Fragment>
          );
        },
      },
    ],
  },
  {
    title: "راهنمای داشبورد",
    tabs: [
      {
        title: "راهنمای داشبورد",
        image: "SUPPORT_FRAME_1",
        component: () => {
          return (
            <Fragment>
              <p className="text-lg font-normal text-gray-G6">
                این دایره بر اساس اطلاعاتی که تو پروفایلت وارد کردی، مراحلی رو
                نشون میده که تو دوره پریودت طی میکنی. طول دوره‌ات ۳۱ روزه، شامل:
                - روز ۱ تا ۵ دوره: پریود میشی (‌خونریزی داری)- روز ۱۱ تا ۱۹
                دوره: پنجره باروری و تخمک‌گذاریته - روز ۲۴ تا ۳۱ دوره: سندروم
                پیش از پریودته(PMS)
              </p>
            </Fragment>
          );
        },
      },
      {
        title: "نوتیفیکیشن",
        image: "SUPPORT_FRAME_1",
        component: () => {
          return (
            <Fragment>
              <p className="text-lg font-normal text-gray-G6">
                این دایره بر اساس اطلاعاتی که تو پروفایلت وارد کردی، مراحلی رو
                نشون میده که تو دوره پریودت طی میکنی. طول دوره‌ات ۳۱ روزه، شامل:
                - روز ۱ تا ۵ دوره: پریود میشی (‌خونریزی داری)- روز ۱۱ تا ۱۹
                دوره: پنجره باروری و تخمک‌گذاریته - روز ۲۴ تا ۳۱ دوره: سندروم
                پیش از پریودته(PMS)
              </p>
            </Fragment>
          );
        },
      },
      {
        title: "ثبت وضعیت",
        image: "SUPPORT_FRAME_1",
        component: () => {
          return (
            <Fragment>
              <p className="text-lg font-normal text-gray-G6">
                این دایره بر اساس اطلاعاتی که تو پروفایلت وارد کردی، مراحلی رو
                نشون میده که تو دوره پریودت طی میکنی. طول دوره‌ات ۳۱ روزه، شامل:
                - روز ۱ تا ۵ دوره: پریود میشی (‌خونریزی داری)- روز ۱۱ تا ۱۹
                دوره: پنجره باروری و تخمک‌گذاریته - روز ۲۴ تا ۳۱ دوره: سندروم
                پیش از پریودته(PMS)
              </p>
            </Fragment>
          );
        },
      },
    ],
  },
  {
    title: "ویرایش اطلاعات پروفایل",
    tabs: [
      {
        title: "ویرایش اطلاعات پروفایل",
        image: "SUPPORT_FRAME_3",
        component: () => {
          return (
            <Fragment>
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
            </Fragment>
          );
        },
      },
      {
        title: "ویرایش مشخصات",
        image: "SUPPORT_FRAME_3",
        component: () => {
          return (
            <Fragment>
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
            </Fragment>
          );
        },
      },
      {
        title: "ویرایش طول دوره (منظم و نامنظم)",
        image: "SUPPORT_FRAME_3",
        component: () => {
          return (
            <Fragment>
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
            </Fragment>
          );
        },
      },

      {
        title: "ویرایش طول پریود",
        image: "SUPPORT_FRAME_3",
        component: () => {
          return (
            <Fragment>
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
            </Fragment>
          );
        },
      },
    ],
  },
  {
    title: "ثبت علائم",
    tabs: [
      {
        title: "ثبت علائم",
        image: "SUPPORT_FRAME_4",
        component: () => {
          return (
            <Fragment>
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
            </Fragment>
          );
        },
      },
      {
        title: "ثبت تست BBT",
        image: "SUPPORT_FRAME_4",
        component: () => {
          return (
            <Fragment>
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
            </Fragment>
          );
        },
      },
      {
        title: "ثبت تست LH",
        image: "SUPPORT_FRAME_4",
        component: () => {
          return (
            <Fragment>
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
            </Fragment>
          );
        },
      },
      {
        title: "ثبت اطلاعات پریود",
        image: "SUPPORT_FRAME_4",
        component: () => {
          return (
            <Fragment>
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
            </Fragment>
          );
        },
      },
      {
        title: "ثبت رابطه جنسی",
        image: "SUPPORT_FRAME_4",
        component: () => {
          return (
            <Fragment>
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
            </Fragment>
          );
        },
      },
      {
        title: "ثبت لکه‌بینی",
        image: "SUPPORT_FRAME_4",
        component: () => {
          return (
            <Fragment>
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
            </Fragment>
          );
        },
      },
      {
        title: "ثبت ترشحات واژن",
        image: "SUPPORT_FRAME_4",
        component: () => {
          return (
            <Fragment>
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
            </Fragment>
          );
        },
      },
      {
        title: "ثبت وزن",
        image: "SUPPORT_FRAME_4",
        component: () => {
          return (
            <Fragment>
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
            </Fragment>
          );
        },
      },
      {
        title: "ثبت حال روحی",
        image: "SUPPORT_FRAME_4",
        component: () => {
          return (
            <Fragment>
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
            </Fragment>
          );
        },
      },
      {
        title: "ثبت علائم",
        image: "SUPPORT_FRAME_4",
        component: () => {
          return (
            <Fragment>
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
            </Fragment>
          );
        },
      },
    ],
  },
  {
    title: "تغییر هدف",
    tabs: [
      {
        title: "تغییر هدف",
        image: "SUPPORT_FRAME_5",
        component: () => {
          return (
            <Fragment>
              <p className="text-lg font-normal text-gray-G6">
                پس از وارد شدن به صفحه هدف من، روی هدف مورد نظر خود کلیک کنید.
                در حال حاضر امکان انتخاب هدف برای «پیش‌بینی پریود» و «قصد
                بارداری» وجود دارد و برای افراد باردار هم به زودی در اپلیکیشن
                امکانات ویژه دوران بارداری قرار خواهد گرفت.
              </p>
            </Fragment>
          );
        },
      },
    ],
  },

  {
    title: "کلینیک",
    tabs: [
      {
        title: "راهنمای کلینیک لونا",
        image: "SUPPORT_FRAME_6",
        component: () => {
          return (
            <Fragment>
              <p className="text-lg font-normal text-gray-G6">
                پزشک‌ها تو کلینیک لونا ‌آماده‌اند تا ازشون مشورت تخصصی بگیری و
                خیالت راحت بشه!
              </p>
            </Fragment>
          );
        },
      },
    ],
  },
  {
    title: "تغییر پریود",
    tabs: [
      {
        title: "تغییر پریود",
        image: "SUPPORT_FRAME_7",
        component: () => {
          return (
            <Fragment>
              <p className="text-lg font-normal text-gray-G6">
                پس از اتمام مراحل ثبت‌نام و وارد شدن به صفحه «امروز» در اپلیکیشن
                لونا، روی دکمه «شروع پریود» در دایره وسط صفحه یا دکمه «+» کلیک
                کنید. در منوی «ثبت وضعیت جدید» دکمه «ثبت پریود» را بزنید. سپس
                تعداد روزهای پریود خود و تاریخ شروع آن را انتخاب کنید و دکمه
                «ثبت پریود» را بزنید.پریود شما ثبت شد و می‌توانید در تب «تقویم»
                آن را در تقویم مشاهده کنید.
              </p>
            </Fragment>
          );
        },
      },
    ],
  },
  {
    title: "ثبت یادآور",
    tabs: [
      {
        title: "ثبت یادآور",
        image: "SUPPORT_FRAME_8",
        component: () => {
          return (
            <Fragment>
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
            </Fragment>
          );
        },
      },
    ],
  },
  {
    title: "اضافه کردن هم‌راه",
    tabs: [
      {
        title: "اضافه کردن هم‌راه",
        image: "SUPPORT_FRAME_9",
        component: () => {
          return (
            <Fragment>
              <p className="text-3xl font-medium text-purple-P1 mb-3">
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
            </Fragment>
          );
        },
      },
    ],
  },
];
export const helpCenter = isShero() ? sheroHelpCenter : lunaHelpCenter;
