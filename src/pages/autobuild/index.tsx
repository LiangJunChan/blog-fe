import React, { useEffect, useState } from 'react'
import { Card } from 'antd'
import { queryRule } from './service'

export default function autobuild() {
  const [build, setBuild] = useState()

  useEffect(() => {
    (async () => {
      const res = await queryRule()
      setBuild(res)
    })()
  }, [])

  return (
    <Card>
      <div dangerouslySetInnerHTML={{ __html: build || ''}}></div>
    </Card>
  )
}
