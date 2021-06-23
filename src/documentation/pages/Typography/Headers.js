const Headers = () => {
  return (
    <div className='o-row'>
      <span className='o-row__item u-1/2 u-p-sm'>
        Headers follow the standard html hierarchy, but with changes to the
        default browser styles. Margin is set to zero so developers can easily
        reason how an element will affect their layout. This also gives more
        granular control over page flow and vertical rhythm by allowing you to
        set custom margins.
      </span>
      <div className='o-row__item u-1/2 u-p-sm'>
        <h1 className='u-h1'>Header Typography</h1>
        <h2 className='u-h2'>Header Typography</h2>
        <h3 className='u-h3'>Header Typography</h3>
        <h4 className='u-h4'>Header Typography</h4>
        <h5 className='u-h5'>Header Typography</h5>
        <h6 className='u-h6'>Header Typography</h6>
      </div>
    </div>
  )
}

export default Headers
