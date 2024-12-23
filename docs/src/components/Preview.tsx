import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
export default function Preview({ id, component, source, style  }) {
  if( !id) id = Math.random().toString(16).slice(2);
  if( style){
  return (
    <Tabs>

      <TabItem value="source" label="Source" default>
      <CodeBlock
        language="jsx">
        {`${source}`}
      </CodeBlock>
      </TabItem>
      <TabItem value="style" label="Style">
        <CodeBlock
        language="css">{`${style}`}</CodeBlock>
        </TabItem>
      <TabItem value="preview" label="Preview" >
      <div class="preview-container" id={id?id:''}>
      <style>
        {'#'+id} {style}
      </style>
      { component }
      </div>
      </TabItem>

    </Tabs>)
  }else{
    return (<Tabs>
      <TabItem value="source" label="Source" default>
      <CodeBlock
        language="jsx">
        {`${source}`}
      </CodeBlock>
      </TabItem>
      <TabItem value="preview" label="Preview" >
      <div class="preview-container">
      { component }
      </div>
      </TabItem>
    </Tabs>
    )
  }
}
