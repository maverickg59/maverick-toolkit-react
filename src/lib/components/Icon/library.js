import { library } from '@fortawesome/fontawesome-svg-core'

export default function iconLibrary(icons) {
  library.add(icons.map(icon => icon))
}
