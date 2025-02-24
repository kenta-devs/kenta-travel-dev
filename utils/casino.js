import dayjs from 'dayjs'
import { getUserIp } from '@/api/hotel'

export function updateSessionQuery (searchQuery) {
  const oldQueryStr = sessionStorage.getItem('destination-params')
  const oldQuery = oldQueryStr ? JSON.parse(oldQueryStr) : {}
  const newQuery = Object.assign(oldQuery, searchQuery)
  sessionStorage.setItem('destination-params', JSON.stringify(newQuery))
}

export function formatObject2Query (query) {
  const q = {}
  for (let key in query) {
    if (Array.isArray(query[key])) {
      q[key] = JSON.stringify(query[key])
    } else {
      q[key] = query[key]
    }
  }
  return q
}

export async function getHotelRoomsParams (searchQuery) {
  try {
    let residency = searchQuery.gj
    if (!residency) {
      const res = await getUserIp()
      residency = (res.country || '').toLowerCase()
    }
    let start = new Date()
    let end = new Date(start.getFullYear(), start.getMonth(), start.getDate() + 2)
    if (searchQuery.date) {
      [start, end] = searchQuery.date.split(',').map(t => parseInt(t, 10))
    }
    const guestMap = { adults: 1, children: [] }
    searchQuery.guestList.forEach(g => {
      if (g.label === 'Adults' && g.value) {
        guestMap.adults = g.value
      } else if (g.label === 'Children' && g.value) {
        for (let i = 0; i < g.value * 1; i++) {
          guestMap.children.push(12)
        }
      }
    })
    return {
      checkin: dayjs(start).format('YYYY-MM-DD'),
      checkout: dayjs(end).format('YYYY-MM-DD'),
      guests: [guestMap],
      language: 'en',
      currency: 'EUR',
      residency
    }
  } catch (e) {
  }
}
