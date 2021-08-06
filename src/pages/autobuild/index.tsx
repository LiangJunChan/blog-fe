import React, { useEffect, useState } from 'react'
import { Card } from 'antd'
import { queryRule } from './service'
import styles from './index.less'
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
      <div
        className={styles.build}
        dangerouslySetInnerHTML={{ __html: build || ''}}>
      </div>
    </Card>
  )
}
