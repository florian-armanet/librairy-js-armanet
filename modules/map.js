import { Loader } from 'google-maps'
import MAP_THEME from '../themes/map.json'

export default async (mapTheme = MAP_THEME) => {
    const mapEl = document.querySelector('.js-map')
    const googleMapApiKeyEl = document.querySelector('[data-google-map-api-key]')
    if (!mapEl || !googleMapApiKeyEl) return

    const { googleMapApiKey } = googleMapApiKeyEl.dataset

    const mapElChildren = document.querySelectorAll('.js-map-child')

    const latPos = [...mapElChildren].map(child => parseFloat(child.dataset.lat))
    const lngPos = [...mapElChildren].map(child => parseFloat(child.dataset.lng))

    const [averageLatPos, averageLngPos] = [latPos, lngPos].map(el => {
        return el.reduce((acc, val, _, { length }) => {
            let total = acc + val
            return total / length
        })
    })

    const options = {
        language: 'fr',
        libraries: ['geometry', 'places'],
        version: '3.42'
    }
    const loader  = new Loader(googleMapApiKey, options)
    const google  = await loader.load()

    const position = new google.maps.LatLng(averageLatPos, averageLngPos)
    const map = new google.maps.Map(mapEl, {
        disableDefaultUI: true,
        zoom: 13,
        center: position
    });

    if (mapTheme) {
        const mapType  = new google.maps.StyledMapType(mapTheme)
        map.mapTypes.set('styled_map', mapType)
        map.setMapTypeId('styled_map');
    }

    [...mapElChildren].forEach((child, index) => {
        const { lat, lng, marker } = child.dataset
        const positionEl   = new google.maps.LatLng(parseFloat(lat), parseFloat(lng))

        new google.maps.Marker({
            position: positionEl,
            map: map,
            icon: marker
        })
    })
}

