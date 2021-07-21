import React from 'react';

const Announcements = ({ announcements }) => {
  return (
    <ul className="announcementsList" >
      {announcements.map(annoucement => (
        <li key={annoucement._id}>{annoucement.title}</li>
      ))}
    </ul>
  )
}

export default Announcements;