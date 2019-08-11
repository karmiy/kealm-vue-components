/* 基础开关 */
export const CodeBasic =
`    <template>
        <div>
            <sl-switch defaultChecked @change='onChange'/>
        </div>
    </template>
    <script>
        export default {
            methods: {
                onChange(checked){
                    console.log(\`a-switch to \${checked}\`);
                }
            }
        }
    </script>`

/* 开关禁用 */
export const CodeDisable =
`    <template>
        <div>
            <sl-switch defaultChecked :disabled="true"/>
        </div>
    </template>`

/* 带文字与图标的开关 */
export const CodeIcon =
`    <template>
        <div>
            <sl-switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
            <sl-switch checkedChildren="1" unCheckedChildren="0" />
            <sl-switch defaultChecked >
                <i class="salus-icon-check-o" slot="checkedChildren" />
                <i class="salus-icon-pop-close-o" slot="unCheckedChildren" />
            </sl-switch>
        </div>
    </template>`

/* 开关大小 */
export const CodeSize =
`    <template>
        <div>
            <sl-switch defaultChecked/>
            <sl-switch size="small" defaultChecked/>
        </div>
    </template>`

/* 开关执行中 */
export const CodeLoading =
`    <template>
        <div>
            <sl-switch loading defaultChecked/>
            <sl-switch size="small" loading/>
        </div>
    </template>`

/* 开关 */
export const CodeBegin =
`    import { Switch } from "@salus/react-components";
    
    class App extends React.Component{
      state = {
        loading: false,
        checked: false,
      }
      clickSwitch = () => {
        if (!this.state.loading) {
          this.setState({
            loading: true,
          })
          setTimeout(() => {
            this.setState(preState => ({
              checked: !preState.checked
            }))
            this.setState({
              loading: false,
            })
          }, 3000);
        }
      }
      render() {
        return (
          <Switch checked={this.state.checked} loading={this.state.loading} onClick={this.clickSwitch} />
        )
      }
    }
    `