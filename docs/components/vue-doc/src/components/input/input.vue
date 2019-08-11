<template>
    <div class="page-box">
        <div class="detail-box">
            <h1>Input&nbsp;输入框</h1>
            <p>通过鼠标或键盘输入内容，是最基础的表单域的包装。</p>
        </div>
        <!-- 标题头部结束 -->

        <!--基本使用部分-->
        <div class="detail-box">
            <h2>基础输入框</h2>
            <p class="code-left-line">Demo</p>
            <sl-input placeholder="Basic usage" />
            <search-code :code="CodeBasic"></search-code>
        </div>
        <!--基本使用部分结束-->

        <!--输入框大小部分-->
        <div class="detail-box">
            <h2>输入框大小</h2>
            <p class="code-left-line">Demo</p>
            <div class="detail-block">
                <sl-input placeholder="large size" size="large"/>
            </div>
            <div class="detail-block">
                <sl-input placeholder="default size" size="default"/>
            </div>
            <div class="detail-block">
                <sl-input placeholder="middle size" size="middle"/>
            </div>
            <div class="detail-block">
                <sl-input placeholder="small size" size="small"/>
            </div>
            <search-code :code="CodeSize"></search-code>
        </div>
        <!--输入框大小部分结束-->

        <!--前置/后置标签部分-->
        <div class="detail-box">
            <h2>前置/后置标签</h2>
            <p class="code-left-line">Demo</p>
            <div class="detail-block">
                <sl-input defaultValue="mysite" type="text" addonBefore="Http://" addonAfter=".com" placeholder="addon"/>
            </div>
            <div class="detail-block">
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
            </div>
            <div class="detail-block">
                <sl-input placeholder="addon">
                    <i slot="addonAfter" class="salus-icon-setting-o"/>
                </sl-input>
            </div>
            <search-code :code="CodeAddOn"></search-code>
        </div>
        <!--前置/后置标签部分结束-->

        <!--输入框组合-->
        <div class="detail-box">
            <h2>输入框组合</h2>
            <p class="code-left-line">Demo</p>
            <div class="detail-block">
                <sl-input-group compact>
                    <sl-input style="width: 20%" defaultValue="0571" />
                    <sl-input style="width: 30%" defaultValue="26888888" />
                </sl-input-group>
            </div>
            <div class="detail-block">
                <sl-input-group compact>
                    <sl-select defaultValue="Zhejiang">
                        <sl-select-option value="Zhejiang">Zhejiang</sl-select-option>
                        <sl-select-option value="Jiangsu">Jiangsu</sl-select-option>
                    </sl-select>
                    <sl-input style="width: 50%" defaultValue="Xihu District, Hangzhou" />
                </sl-input-group>
            </div>
            <div class="detail-block">
                <sl-input-group compact>
                    <sl-select defaultValue="Option1">
                        <sl-select-option value="Option1">Option1</sl-select-option>
                        <sl-select-option value="Option2">Option2</sl-select-option>
                    </sl-select>
                    <sl-input style="width: 50%" defaultValue="input content" />
                </sl-input-group>
            </div>
            <div class="detail-block">
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
            </div>
            <div class="detail-block">
                <sl-input-group compact>
                    <sl-select defaultValue="1">
                        <sl-select-option value="1">Between</sl-select-option>
                        <sl-select-option value="2">Except</sl-select-option>
                    </sl-select>
                    <sl-input style=" width: 100px; text-align: center" placeholder="Minimum" />
                    <sl-input style=" width: 30px; border-left: 0; pointer-events: none; backgroundColor: #fff" placeholder="~" disabled />
                    <sl-input style="width: 100px; text-align: center; border-left: 0" placeholder="Maximum" />
                </sl-input-group>
            </div>
            <div class="detail-block">
                <sl-input-group compact>
                    <sl-select defaultValue="Sign Up">
                        <sl-select-option value="Sign Up">Sign Up</sl-select-option>
                        <sl-select-option value="Sign In">Sign In</sl-select-option>
                    </sl-select>
                    <sl-input style="width: 200px" placeholder="Email" type="email" />
                </sl-input-group>
            </div>
            <search-code :code="CodeGroup"></search-code>
        </div>
        <!--输入框组合部分结束-->

        <!--搜索框-->
        <div class="detail-box">
            <h2>搜索框</h2>
            <p class="code-left-line">Demo</p>
            <div class="detail-block">
                <sl-input-search
                        placeholder="input search text"
                        @search="onSearch"/>
            </div>
            <div class="detail-block">
                <sl-input-search
                        placeholder="input search text"
                        @search="onSearch" enterButton/>
            </div>
            <div class="detail-block">
                <sl-input-search
                        placeholder="input search text"
                        @search="onSearch" enterButton="Search"/>
            </div>
            <div class="detail-block">
                <sl-input-search
                        placeholder="input search text" @search="onSearch">
                    <sl-button type="primary" slot="enterButton">Search</sl-button>
                </sl-input-search>
            </div>
            <search-code :code="CodeSearch"></search-code>
        </div>
        <!--搜索框部分结束-->

        <!--适应文本高度的文本域部分-->
        <div class="detail-box">
            <h2>适应文本高度的文本域</h2>
            <p class="code-left-line">Demo</p>
            <div class="detail-block">
                <sl-textarea placeholder="Autosize height based on content lines" autosize />
            </div>
            <div class="detail-block">
                <sl-textarea placeholder="Autosize height with minimum and maximum number of lines"
                             :autosize="autosize" />
            </div>
            <search-code :code="CodeAutoSize"></search-code>
        </div>
        <!--适应文本高度的文本域结束-->

        <!--带有字数限制的文本框-->
        <div class="detail-box">
            <h2>带有字数限制</h2>
            <p class="code-left-line">Demo</p>
            <div class="detail-block">
                <sl-input :maxLength="10"></sl-input>
            </div>
            <div class="detail-block">
                <sl-textarea :maxLength="10" placeholder="Autosize height based on content lines" autosize />
            </div>
            <search-code :code="CodeLimitCount"></search-code>
        </div>
        <!--带有字数显示的文本框-->

        <!--前缀和后缀部分-->
        <div class="detail-box">
            <h2>前缀和后缀</h2>
            <p class="code-left-line">Demo</p>
            <div class="detail-block">
                <sl-input placeholder="with prefix">
                    <i class="salus-icon-account-o" slot="prefix"></i>
                </sl-input>
            </div>
            <div class="detail-block">
                <sl-input placeholder="with suffix">
                    <i class="salus-icon-search-o" slot="suffix"></i>
                </sl-input>
            </div>
            <search-code :code="CodeSuffix"></search-code>
        </div>
        <!--前缀和后缀结束-->

        <!--文本域部分-->
        <div class="detail-box">
            <h2>文本域</h2>
            <p class="code-left-line">Demo</p>
            <sl-textarea row="4"></sl-textarea>
            <search-code :code="CodeTextarea"></search-code>
        </div>
        <!--文本域结束-->

        <!--api展示-->
        <div class="detail-box">
            <h2>API</h2>
            <p class="row-in-round">sl-input</p>
            <table class="salus-table salus-table-striped salus-table-hover">
                <thead>
                <tr>
                    <th width="15%">参数</th>
                    <th width="35%">描述</th>
                    <th width="35%">类型</th>
                    <th width="15%">默认值</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>size</td>
                    <td>控件大小。注：标准表单内的输入框大小限制为 large。可选 large | default | middle | small</td>
                    <td>string </td>
                    <td>default</td>
                </tr>
                <tr>
                    <td>maxLength</td>
                    <td>输入字数限制</td>
                    <td>number </td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>addonAfter</td>
                    <td>带标签的 input，设置后置标签</td>
                    <td>string 丨 slot</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>addonBefore</td>
                    <td>带标签的 input，设置前置标签</td>
                    <td>string 丨 slot</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>prefix</td>
                    <td>带有前缀图标的 input</td>
                    <td>string 丨 slot</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>suffix</td>
                    <td>带有后缀图标的 input</td>
                    <td>string 丨 slot</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>defaultValue</td>
                    <td>输入框默认内容</td>
                    <td>string</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>是否禁用状态，默认为 false</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>id</td>
                    <td>输入框的 id</td>
                    <td>string</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>type</td>
                    <td>声明 input 类型，同原生 input 标签的 type 属性</td>
                    <td>string</td>
                    <td>text</td>
                </tr>
                <tr>
                    <td>value(v-model)</td>
                    <td>输入框内容</td>
                    <td>string</td>
                    <td>-</td>
                </tr>
                </tbody>
            </table>
            <p class="row-in-round">sl-input 事件</p>
            <div class="detail-block">
                <table class="salus-table salus-table-hover salus-table-striped">
                    <thead>
                    <tr>
                        <th width="15%">事件名称</th>
                        <th width="70%">说明</th>
                        <th width="15%">回调参数</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>change</td>
                        <td>输入框内容变化时的回调</td>
                        <td>function(e)</td>
                    </tr>
                    <tr>
                        <td>pressEnter</td>
                        <td>按下回车的回调</td>
                        <td>function(e)</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <p class="row-in-round">sl-textarea</p>
            <table class="salus-table salus-table-striped salus-table-hover">
                <thead>
                <tr>
                    <th width="15%">参数</th>
                    <th width="35%">描述</th>
                    <th width="35%">类型</th>
                    <th width="15%">默认值</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>autosize</td>
                    <td>只适用于 sl-textarea，自适应内容高度，可设置为 boolean 或对象：{{'{'}} minRows: 2, maxRows: 6 {{'}'}}</td>
                    <td>boolean|object</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>defaultValue</td>
                    <td>输入框默认内容</td>
                    <td>string</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>value(v-model)</td>
                    <td>输入框内容</td>
                    <td>string</td>
                    <td>-</td>
                </tr>
                </tbody>
            </table>
            <p class="row-in-round">sl-textarea 事件</p>
            <div class="detail-block">
                <table class="salus-table salus-table-hover salus-table-striped">
                    <thead>
                    <tr>
                        <th width="15%">事件名称</th>
                        <th width="70%">说明</th>
                        <th width="15%">回调参数</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>pressEnter</td>
                        <td>按下回车的回调</td>
                        <td>function(e)</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <p class="row-in-round">sl-input-search</p>
            <p>其他属性与 sl-input 一致。</p>
            <table class="salus-table salus-table-striped salus-table-hover">
                <thead>
                <tr>
                    <th width="15%">参数</th>
                    <th width="35%">描述</th>
                    <th width="35%">类型</th>
                    <th width="15%">默认值</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>enterButton</td>
                    <td>是否有确认按钮，可设为按钮文字</td>
                    <td>boolean 丨 slot</td>
                    <td>false</td>
                </tr>
                </tbody>
            </table>
            <p class="row-in-round">sl-input-search 事件</p>
            <div class="detail-block">
                <table class="salus-table salus-table-hover salus-table-striped">
                    <thead>
                    <tr>
                        <th width="15%">事件名称</th>
                        <th width="70%">说明</th>
                        <th width="15%">回调参数</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>search</td>
                        <td>点击搜索或按下回车键时的回调</td>
                        <td>function(value, event)</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <p class="row-in-round">sl-input-group</p>
            <table class="salus-table salus-table-striped salus-table-hover">
                <thead>
                <tr>
                    <th width="15%">参数</th>
                    <th width="35%">描述</th>
                    <th width="35%">类型</th>
                    <th width="15%">默认值</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>compact</td>
                    <td>是否用紧凑模式</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>size</td>
                    <td>large | default | middle | small</td>
                    <td>string</td>
                    <td>default</td>
                </tr>
                </tbody>
            </table>
        </div>
        <!--api展示结束-->
    </div>
</template>
<script>
    import {CodeBasic, CodeSize, CodeAddOn, CodeGroup, CodeSearch, CodeAutoSize, CodeLimitCount, CodeSuffix, CodeTextarea} from "./input.code";

    export default {
        name: 'Input',
        components: {
            SearchCode: () => import('../../common/searchCode/searchCode')
        },
        data() {
            return {
                autosize: { minRows: 2, maxRows: 6 },
                trueVal: true,
                CodeBasic,
                CodeSize,
                CodeAddOn,
                CodeGroup,
                CodeSearch,
                CodeAutoSize,
                CodeLimitCount,
                CodeSuffix,
                CodeTextarea,
            }
        },
        methods: {
            onSearch (value) {
                console.log(value)
            },
        }
    }
</script>