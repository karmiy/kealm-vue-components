/* 基础按钮 */
export const CodeBasic =
    `    <template>
        <div>
            <sl-button type="primary">主按钮</sl-button>
            <sl-button>默认按钮</sl-button>
            <sl-button type="dashed">虚线按钮</sl-button>
            <sl-button type="link">文字按钮</sl-button>
            <sl-button type="danger">危险按钮</sl-button>
            <sl-button type="success">成功按钮</sl-button>
        </div>
    </template>`;

/* 禁用按钮 */
export const CodeDisable =
    `    <template>
        <div>
            <sl-button>默认按钮</sl-button>
            <sl-button disabled>默认按钮(disabled)</sl-button>
            <sl-button type="primary">主按钮</sl-button>
            <sl-button disabled type="primary">主按钮(disabled)</sl-button>
        </div>
    </template>`;

/* 按钮大小 */
export const CodeSize =
    `    <template>
        <div>
            <sl-button type="primary" size="small">主按钮(small)</sl-button>
            <sl-button type="primary" size="middle">主按钮(middle)</sl-button>
            <sl-button type="primary">主按钮(default)</sl-button>
        </div>
    </template>`;

/* 满宽按钮 */
export const CodeFull =
    `    <template>
        <div>
            <sl-button full>默认按钮(full)</sl-button>
            <sl-button type="primary" full>主按钮(full)</sl-button>
        </div>
    </template>`;

/* 图标按钮 */
export const CodeIcon =
    `    <template>
        <div>
            <sl-button icon><i class="salus-icon-search-o"></i></sl-button>
            <sl-button shape="circle" icon><i class="salus-icon-search-o"></i>
            </sl-button>
            <sl-button type="primary" icon><i
                   class="salus-icon-search-o"></i>按钮
            </sl-button>
        </div>
    </template>`;

/* 按钮组 */
export const CodeGroup =
    `    <template>
        <div>
            <sl-button-group gap>
                <sl-button type="primary">按钮(primary)</sl-button>
                <sl-button>按钮(secondary)</sl-button>
                <sl-button icon>
                    按钮(more actions)<i class="salus-icon-triangle-down"></i>
                </sl-button>
            </sl-button-group>
            <sl-button-group>
                <sl-button>按钮</sl-button>
                <sl-button type="primary">按钮</sl-button>
            </sl-button-group>
            <sl-button-group>
                <sl-button icon><i class="salus-icon-lock-o"></i></sl-button>
                <sl-button type="primary" icon="true">
                    <i class="salus-icon-unlock-o"></i>
                </sl-button>
            </sl-button-group>
            <sl-button-group size="small">
                <sl-button>按钮</sl-button>
                <sl-button type="primary">按钮</sl-button>
            </sl-button-group>
        </div>
    </template>`;

/* 加载按钮 */
export const CodeLoad =
    `    <template>
        <div>
            <sl-button type="primary" :loading="trueVal">加载</sl-button>
            <sl-button type="primary" :loading="isLoading"
                          @click="enterLoading">点击加载</sl-button>
        </div>
    </template>
    <script>
        export default {
            data() {
                return {
                    isLoading: false
                }
            },
            methods: {
                enterLoading() {
                    this.isLoading = true;
                    setTimeout(() => {
                        this.isLoading = false;
                    }, 3000)
                }
            }
        }
    </script>`;