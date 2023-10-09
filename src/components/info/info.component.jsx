import './info.styles.css'
import LocationPin from '../../assets/infoIcons/location-dot-solid.svg'
import LegalBreif from '../../assets/infoIcons/briefcase-solid.svg'
import MobilePhone from '../../assets/infoIcons/mobile-button-solid.svg'
import InfoBox from '../info-box/info-box.component';

const InfoData = [
    {
        title: 'Find us at the Office',
        text: 'ADSBld Mihail Kogalniceanu, nr. 8\n7652 Bucharest,\nRomania',
        Icon: LocationPin
    },
    {
        title: 'Give us a ring',
        text: 'Micheal Jordan\n+40 762 321 712\nMon - Fri, 8:00-22:00',
        Icon: MobilePhone
    },
    {
        title: 'Legal Information',
        text: 'XYZ\nVAT . EN234124SD\nIBAN . EN8732ENGB23003422\nBank . Great Britain Bank',
        Icon: LegalBreif
    }
]

function Info() {
    return ( 
        <div className="info-container">
            {InfoData.map((infoItem, index) => (
                <InfoBox Icon={infoItem.Icon} title={infoItem.title} text={infoItem.text} key={index} />
            ))}
        </div>
     );
}

export default Info;