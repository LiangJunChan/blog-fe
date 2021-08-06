import React, { useEffect, useState } from 'react'
import { Card, Drawer } from 'antd'
import { Button, Tag, Space } from 'antd';
import ProList from '@ant-design/pro-list';
import { queryRule, queryList } from './service'
import styles from './index.less'

export default function stack() {
  const [list, setList] = useState([])
  const [leetcode, setLeetcode] = useState()

  const metas = {
    title:{
      dataIndex: 'name'
    },
    description: {
      dataIndex: 'des'
    },
    content: {
      dataIndex: 'content'
    }
  }
  useEffect(() => {
    (async () => {
      const list = await queryList({type: 'stack'})
      setList(list)
    })()
  }, [])
  return (
    <>
      <Card>
      <ProList
          toolBarRender={() => {
            return [
              <Button key="3" type="primary">
                新建
              </Button>,
            ];
          }}
          search={{
            filterType: 'light',
          }}
          rowKey="id"
          headerTitle="基础列表"
          pagination={{
            pageSize: 5,
          }}
          showActions="hover"
          metas={metas}
          dataSource={list}
          onRow={ (record:any) => {
            return {
              onClick: () => {
                (async () => setLeetcode(await queryRule({id: record.id,type: 'stack'})))()
              }
            }
          }}
        />
        {/* {list && list.map(v => (
          <div onClick={() => {
            console.log(v);
            (async () => setLeetcode(await queryRule({id: v,type: 'stack'})))()
          }}>{v}</div>
        ))} */}
      </Card>
      <Drawer
        width={1200}
        visible={!!leetcode}
        onClose={() => {
          setLeetcode(undefined);
        }}
        closable={false}
      >
        <div className={styles.stack} dangerouslySetInnerHTML={{ __html: leetcode || ''}}></div>
      </Drawer>
    </>
  )
}
