import Footer from '../components/footer'
import Navbar from '../components/navbar'

function Search() {
  return (
    <div>
      <Navbar />
      <div>
        <h3>Filter</h3>
        <h4>Price range</h4>

        <h4>Niche</h4>
        <input
          type="checkbox"
          name="niche"
          value="art"
          id="niche-art"
        ></input>
        <label htmlFor="niche-art">Art</label>
        <br />
        <input
          type="checkbox"
          name="niche"
          value="faith"
          id="niche-faith"
        ></input>
        <label htmlFor="niche-faith">Faith</label>
        <br />
        <input
          type="checkbox"
          name="niche"
          value="health"
          id="niche-health"
        ></input>
        <label htmlFor="niche-health">Health</label>
        <br />
        <input
          type="checkbox"
          name="niche"
          value="motivational"
          id="niche-motivational"
        ></input>
        <label htmlFor="niche-health">Motivational</label>

        <h4>Follower count</h4>
        <input
          type="checkbox"
          name="followerCount"
          value="any"
          id="followerCount-any"
        ></input>
        <label htmlFor="niche-art">Any</label>
        <br />
        <input
          type="checkbox"
          name="followerCount"
          value="1kTo10k"
          id="followerCount-1kTo10k"
        ></input>
        <label htmlFor="niche-art">1k-10k</label>
        <br />
        <input
          type="checkbox"
          name="followerCount"
          value="10kTo50k"
          id="followerCount-10kTo50k"
        ></input>
        <label htmlFor="niche-faith">10k-50k</label>
        <br />
        <input
          type="checkbox"
          name="followerCount"
          value="50kTo200k"
          id="followerCount-50kTo200k"
        ></input>
        <label htmlFor="niche-health">50k-200k</label>
        <br />
        <input
          type="checkbox"
          name="followerCount"
          value="200kTo1M"
          id="followerCount-200kTo1M"
        ></input>
        <label htmlFor="niche-health">200k-1M</label>
        <br />
        <input
          type="checkbox"
          name="followerCount"
          value="1M+"
          id="followerCount-1M+"
        ></input>
        <label htmlFor="niche-health">1M+</label>

        <h4>Platform</h4>
        <input
          type="checkbox"
          name="platform"
          value="Instagram"
          id="platform-Instagram"
        ></input>
        <label htmlFor="niche-art">Instagram</label>
        <br />
        <input
          type="checkbox"
          name="platform"
          value="X"
          id="platform-X"
        ></input>
        <label htmlFor="niche-faith">X</label>
        <br />
        <input
          type="checkbox"
          name="platform"
          value="YouTube"
          id="platform-YouTube"
        ></input>
        <label htmlFor="niche-health">YouTube</label>
        <br />
      </div>
      <Footer />
    </div>
  )
}

export default Search