import React from 'react'
import ButtonRedux from '../../assets/components/renderListRedux/ButtonRedux'
import ViewRedux from '../../assets/components/renderListRedux/ViewRedux'

const ReduxPage = () => {
  return (
    <div>
    {/* Handle Data Secara Dinamis */}
     <div className="flex flex-col gap-6">
      <span>
        <ViewRedux/>
      </span>

      <span>
        <ButtonRedux/>
      </span>
     </div>
    </div>
  )
}

export default ReduxPage
