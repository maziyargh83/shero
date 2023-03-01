# (luna-shero) website

built with [remix](https://remix.run/ "remix")
writen in type script
designed by tailwind

# command

##### development

run both below code in two terminal at project folder or config cocurrency.
run `yarn dev` or `npm run dev`
run `yarn dev:css` or `npm run dev:css`

##### production

read this will helpfull [how deploy next js app in ngnix](https://gist.github.com/jjsquady/5399d6e1b23f501083a9c262d806e248 "how deploy next js app in ngnix")

first run `yarn build` then `yarn start`
you may need to use `npx remix setup`

###config
we have config for create two version of website for shero and luna
shero in master and luna in luna branch
for translate text we use own functionality can config with "en"|"fa"
we put string in app/utils/language
to add new string you must add key in enum of the object
some of data will not in language folder should be in data folder and split with `isShero()` function
to chanfe language you have to change config to this
| lang | product | lang |
| ------------ | ------------ | ------------ |
| fa | LUNA_PRODUCT | LANGUAGE_FA |
| en | SHERO_PRODUCT | LANGUAGE_EN |

### image

images are in `public / images` folder
use can use image with `imageBuilder()` function
in `data / images ` you can add new image with this schema
indivual image for shero and luna use this format :
` SUPPORT_FRAME_1: { url: { luna: "luna/frames/support/support-1.png", shero: "shero/frames/support/support-1.png", }, },`

for both support :
` MARKER: { url: "shero/element/marker.png", },`
