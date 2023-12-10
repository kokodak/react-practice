import React, { useState } from "react"

function LikeButton() {
  const [liked, setLiked] = useState(false)
  if (liked) return 'you liked this';
  return React.createElement(
    'button',
    {
      onClick: () => setLiked(true)
    }
  )
}

export default LikeButton
