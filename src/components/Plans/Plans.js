import './Plans.css';
import { PLANList } from '../../shared/plans';

const SvgCheck = () => {
  return (
    <i className="plans__symbol--check">
      <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" >
        <path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
      </svg>
    </i>
  )
}

const SvgInfo = () => {
  return (
    <i className="plans__symbol--info">
      <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
        <path fill="currentColor" d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z">
        </path>
      </svg>
    </i>
  )
}

const Plan = ({item}) => {
  return (
    <tr>
      <td>{item.title}:</td>
      <td>
        <SvgCheck />
        <SvgInfo tooltip={item.freeTitle}/> &nbsp;
      </td>
      <td>
        <SvgCheck />
        <SvgInfo tooltip={item.proTitle}/> &nbsp;
      </td>
    </tr>
  )
}

const Plans = () => {
  return (
    <section className="plans container">
      <h2>Subscription Plan</h2>

      <div className="plans__container">
        <div className="plans__table">
          <table>
            <tbody>
              
              <tr>
                <th></th>
                <th className="plans__header plans__header--free">FREE</th>
                <th className="plans__header plans__header--pro">
                  <div className="plans__name">PRO</div>
                  <div className="plans__price plans__price--delete">
                    <sup>₹</sup>3650
                  </div>
                  <div className="plans__price">
                    <sup>₹</sup>2499
                  </div>
                  <div className="plans__period">Year</div>
                </th>
              </tr>

              {PLANList.map(item => <Plan key={item.id} item={item}/>)}

              <tr>
                <td></td>
                <td>
                  <a className="plans__download" href="https://play.google.com/store/apps/details?id=com.immparentportal&amp;hl=en&amp;gl=US" target="blank">
                    Download
                  </a>
                </td>

                <td>
                  <a className="plans__purchase" href="https://immunifyme.com/parent/signIn">Purchase</a>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>

    </section>
  )
}

export default Plans;