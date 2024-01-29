import ContentLoader from 'react-content-loader'
import { MyLoaderProps } from './MyLoader.props'
function MyLoader({ amountOfElem }: MyLoaderProps) {
  return [...new Array(amountOfElem)].map((_, i) => (
    <ContentLoader viewBox="0 0 300 380" height={343} width={285} key={i}>
      <rect x="0" y="0" rx="5" ry="5" width="343" height="200" />
      <rect x="0" y="240" rx="4" ry="4" width="343" height="13" />
      <rect x="0" y="220" rx="4" ry="4" width="220" height="13" />
    </ContentLoader>
  ))
}

export default MyLoader
