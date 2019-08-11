/* 基础输入框 */
export const CodeBasic =
    `    <template>
        <div>
            <sl-input placeholder="Basic usage"/>
        </div>
    </template>`

/* 输入框大小 */
export const CodeSize =
    `    <template>
        <div>
            <sl-input placeholder="large size" size="large"/>
            <sl-input placeholder="default size" size="default"/>
            <sl-input placeholder="middle size" size="middle"/>
            <sl-input placeholder="small size" size="small"/>
        </div>
    </template>`


/* 前置/后置标签 */
export const CodeAddOn =
    `    <template>
        <div>
            <sl-input defaultValue="mysite" type="text" addonBefore="Http://" addonAfter=".com" placeholder="addon"/>
            <sl-input defaultValue="mysite">
                <sl-select slot="addonBefore" defaultValue="Http://" style="width: 90px">
                    <sl-select-option value="Http://">Http://</sl-select-option>
                    <sl-select-option value="Https://">Https://</sl-select-option>
                </sl-select>
                <sl-select slot="addonAfter" defaultValue=".com" style="width: 80px">
                    <sl-select-option value=".com">.com</sl-select-option>
                    <sl-select-option value=".jp">.jp</sl-select-option>
                    <sl-select-option value=".cn">.cn</sl-select-option>
                    <sl-select-option value=".org">.org</sl-select-option>
                </sl-select>
            </sl-input>
            <sl-input>
                <i slot="addonAfter" class="salus-icon-setting-o"/>
            </sl-input>
        </div>
    </template>`

/* 输入框组合 */
export const CodeGroup =
    `    <template>
        <div>
            <sl-input-group compact>
                <sl-input style="width: 20%" defaultValue="0571" />
                <sl-input style="width: 30%" defaultValue="26888888" />
            </sl-input-group>
            <sl-input-group compact>
                <sl-select defaultValue="Zhejiang">
                    <sl-select-option value="Zhejiang">Zhejiang</sl-select-option>
                    <sl-select-option value="Jiangsu">Jiangsu</sl-select-option>
                </sl-select>
                <sl-input style="width: 50%" defaultValue="Xihu District, Hangzhou" />
            </sl-input-group>
            <sl-input-group compact>
                <sl-select defaultValue="Option1">
                    <sl-select-option value="Option1">Option1</sl-select-option>
                    <sl-select-option value="Option2">Option2</sl-select-option>
                </sl-select>
                <sl-input style="width: 50%" defaultValue="input content" />
            </sl-input-group>
            <sl-input-group compact>
                <sl-select defaultValue="Option1-1">
                    <sl-select-option value="Option1-1">Option1-1</sl-select-option>
                    <sl-select-option value="Option1-2">Option1-2</sl-select-option>
                </sl-select>
                <sl-select defaultValue="Option2-2">
                    <sl-select-option value="Option2-1">Option2-1</sl-select-option>
                    <sl-select-option value="Option2-2">Option2-2</sl-select-option>
                </sl-select>
            </sl-input-group>
            <sl-input-group compact>
                <sl-select defaultValue="1">
                    <sl-select-option value="1">Between</sl-select-option>
                    <sl-select-option value="2">Except</sl-select-option>
                </sl-select>
                <sl-input style=" width: 100px; text-align: center" placeholder="Minimum" />
                <sl-input style=" width: 30px; border-left: 0; pointer-events: none; backgroundColor: #fff" placeholder="~" disabled />
                <sl-input style="width: 100px; text-align: center; border-left: 0" placeholder="Maximum" />
            </sl-input-group>
            <sl-input-group compact>
                <sl-select defaultValue="Sign Up">
                    <sl-select-option value="Sign Up">Sign Up</sl-select-option>
                    <sl-select-option value="Sign In">Sign In</sl-select-option>
                </sl-select>
                <sl-input style="width: 200px" placeholder="Email" type="email" />
            </sl-input-group>
        </div>
    </template>`

/* 搜索框 */
export const CodeSearch =
    `    <template>
        <div>
            <sl-input-search placeholder="input search text" @search="onSearch"/>
            <sl-input-search placeholder="input search text" @search="onSearch" enterButton/>
            <sl-input-search placeholder="input search text" @search="onSearch" enterButton="Search"/>
            <sl-input-search placeholder="input search text" @search="onSearch">
                <sl-button slot="enterButton">Search</sl-button>
            </sl-input-search>
        </div>
    </template>
    <script>
        export default {
            methods: {
                onSearch (value) {
                    console.log(value)
                },
            }
        }
    </script>`
/* 搜索框 */

/* 适应文本高度的文本域 */
export const CodeAutoSize =
    `    <template>
        <div>
            <sl-textarea placeholder="Autosize height based on content lines" autosize />
            <sl-textarea placeholder="Autosize height with minimum and maximum number of lines" 
                :autosize="{ minRows: 2, maxRows: 6 }" />
        </div>
    </template>`
/* 带有字数显示 */
export const CodeLimitCount =
    `    <template>
        <div>
            <sl-input :maxLength="10"></sl-input>
            <sl-textarea :maxLength="10" placeholder="Autosize height based on content lines" autosize />
        </div>
    </template>`

/* 前缀和后缀部分 */
export const CodeSuffix =
    `    <template>
        <div>
            <sl-input placeholder="with prefix">
                <i class="salus-icon-account-o" slot="prefix"></i>
            </sl-input>
            <sl-input placeholder="with suffix">
                <i class="salus-icon-search-o" slot="suffix"></i>
            </sl-input>
        </div>
    </template>`

/* 文本域部分 */
export const CodeTextarea =
    `    <template>
        <div>
            <sl-textarea row="4"></sl-textarea>
        </div>
    </template>`