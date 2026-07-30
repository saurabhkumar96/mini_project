import ShowFull from '../components/ShowFull'
import ShowWithPagination from '../components/ShowWithPagination'


const Home = () => {
  return (
    <div style={{display:"flex", gap:"30px" ,}}>
      <ShowFull/>
      <ShowWithPagination />
    </div>
  )
}

export default Home