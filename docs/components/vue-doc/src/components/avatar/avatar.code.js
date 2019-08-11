/* 基础头像Code */
export const CodeBasic = 
`    <template>
        <div>
            <div>
                <sl-avatar size="large" icon="salus-icon-account-o"/>
                <sl-avatar icon="salus-icon-account-o"/>
                <sl-avatar size="small" icon="salus-icon-account-o"/>
            </div>
            <div>
                <sl-avatar shape="square" size="large" icon="salus-icon-account-o"/>
                <sl-avatar shape="square" icon="salus-icon-account-o"/>
                <sl-avatar shape="square" size="small" icon="salus-icon-account-o"/>
            </div>
        </div>
    </template>`;

/* 头像类型Code */
export const CodeType = 
`    <template>
        <div>
            <sl-avatar icon="salus-icon-account-o"/>
            <sl-avatar>U</sl-avatar>
            <sl-avatar>USER</sl-avatar>
            <sl-avatar :src="require('../../assets/imgs/card-example.png')"/>
            <sl-avatar style="color:#f56a00; background-color:#fde3cf;">U</sl-avatar>
            <sl-avatar icon="salus-icon-account-o" style="background-color:#37BC70;" />
        </div>
    </template>`;

/* 调整头像Code */
export const CodeChange = 
`    <template>
        <div>
            <sl-avatar
                style="vertical-align: middle;"
                :style="{backgroundColor: colorList[index]}"
                size="large"
            >{{userList[index]}}</sl-avatar>
            <sl-button type="dashed" @click="change" style="margin-left: 16px; vertical-align: bottom;">Change</sl-button>
        </div>
    </template>
    <script>
        export default {
            data() {
              return {
                userList: [ 'U', 'Lucy', 'Tom', 'Edward' ],
                colorList: [ '#f56a00', '#7265e6', '#ffbf00', '#00a2ae' ],
                index: 0,
              }
            },
            methods: {
                change() {
                  this.index = (this.index + 1) % 4;
                }
            }
        }
    </script>`;

/* 带有徽标数的头像 */
export const CodeBadge = 
`    <template>
        <div>
            <sl-badge :count="5"><sl-avatar style="margin: 0" icon="salus-icon-account-o" /></sl-badge>
            <sl-badge dot><sl-avatar style="margin: 0" icon="salus-icon-account-o" shape="square" /></sl-badge>
        </div>
    </template>`;