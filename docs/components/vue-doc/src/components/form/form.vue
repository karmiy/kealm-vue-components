<template>
    <div class="page-box">
        <div class="detail-box">
            <h1>Form 表单</h1>
            <p>具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。</p>
        </div>

        <!--动态增减表单项-->
        <div class="detail-box">
            <h2>动态增减表单项</h2>
            <p class="code-left-line">Demo</p>
            <div class="detail-box form-demo-box">
                <sl-form
                    :form="dynamicAddItemForm"
                    class="salus-advanced-search-form"
                    @submit="handleSubmit($event, 'dynamicAddItemForm')"
                >
                    <sl-form-item
                        v-for="(k, index) in dynamicAddItemForm.getFieldValue('keys')"
                        :key="k"
                        :label="'Passengers'"
                        :required="false"
                    >
                        <sl-input
                            v-decorator="[
                              `names[${k}]`,
                              {
                                preserve: true,
                                rules: [{
                                  required: true,
                                  whitespace: true,
                                  message: 'Please input passenger\'s name or delete this field.',
                                }],
                              }
                            ]"
                            placeholder="passenger name"
                            style="width: 160px;"
                        />
                        <sl-button
                            icon
                            type="link"
                            :disabled="dynamicAddItemForm.getFieldValue('keys').length === 1"
                            @click="() => remove(k)"
                        >
                            <i class="salus-icon-round-minus-o" />
                        </sl-button>
                    </sl-form-item>
                    <sl-form-item style="margin-left: 120px;">
                        <sl-button
                            type="dashed"
                            @click="add"
                            icon
                        >
                            <i class="salus-icon-add-o" /> Add field
                        </sl-button>
                    </sl-form-item>
                    <sl-form-item style="margin-left: 120px;">
                        <sl-button
                            type="primary"
                            html-type="submit"
                        >
                            Submit
                        </sl-button>
                    </sl-form-item>
                </sl-form>
            </div>
            <search-code :code="CodeDynamicAddFormItem"></search-code>
        </div>
        <!--动态增减表单项结束-->

        <!--表单校验提示信息位置-右边-->
        <div class="detail-box">
            <h2>表单校验提示信息位置-右边</h2>
            <p class="code-left-line">Demo</p>
            <sl-form
                :form="validateFormTextRight"
                @submit="handleSubmit($event, 'validateFormTextRight')"
            >
                <sl-form-item label="发送名单" hasFeedback explainOutside>
                    <sl-radio-group
                        v-decorator="[
                          'radio',
                          {
                            rules: [{ required: true, message: '请选择发送名单类型!' }],
                            initialValue: ''
                          }
                        ]"
                    >
                        <sl-radio value="E">选择群组</sl-radio>
                        <sl-radio value="F">手动输入</sl-radio>
                    </sl-radio-group>
                </sl-form-item>
                <sl-form-item label="发送方式">
                    <sl-radio-group>
                        <sl-radio value="N">立即推送</sl-radio>
                        <sl-radio value="D">定时发送</sl-radio>
                    </sl-radio-group>
                </sl-form-item>
                <sl-form-item
                    label="发送时间"
                    explainOutside
                >
                    <sl-date-picker
                        showTime
                        allowClear
                        format="YYYY-MM-DD HH:mm:ss"
                        v-decorator="[
                          'dateTimeChose',
                          {
                            rules: [{ required: true, message: '请选择发送时间!' }],
                          }
                        ]" />
                </sl-form-item>
                <sl-form-item
                    label="模板名称"
                    validateStatus="error"
                    explainOutside
                    required
                    help="请填写模板名称!"
                >
                    <sl-input
                        placeholder="请输入模板名称"
                    />
                </sl-form-item>
                <sl-form-item
                    label="短信内容"
                    explainOutside
                >
                    <sl-textarea
                        row="2"
                        v-decorator="[
                          'messageArea',
                          {
                            rules: [{ required: true, message: '请填写短信内容!' }],
                          }
                        ]"
                    />
                    <div slot="extra">1.长度不超过1000字符，按67字/条计费</div>
                    <div slot="extra">2.营销类短信，请在短信模板后面增加"回T退订"</div>
                    <div slot="extra">3.短信内容不能含有【】符号</div>
                    <div slot="extra">4.如果是变量内容，模板的格式为：XXX</div>
                </sl-form-item>
                <sl-form-item
                    label="短信签名"
                    hasFeedback
                    explainOutside
                    iconOutside
                >
                    <sl-select
                        showSearch
                        allowClear
                        placeholder="请填写短信签名"
                        v-decorator="[
                          'choseGroup',
                          {
                            rules: [{ required: true, message: '请选择用户群组!' }],
                            initialValue: 'a10'
                          }
                        ]"
                    >
                        <sl-select-option value="a10" >a10</sl-select-option>
                        <sl-select-option value="b11" >b11</sl-select-option>
                    </sl-select>
                </sl-form-item>
                <sl-form-item style="margin-left: 120px;">
                    <sl-button
                        type="primary"
                        html-type="submit"
                    >
                        Submit
                    </sl-button>
                </sl-form-item>
            </sl-form>
            <search-code :code="CodeValidateRight"></search-code>
        </div>
        <!--表单校验提示信息位置-右边结束-->

        <!--模态框中的表单-->
        <div class="detail-box">
            <h2>模态框中的表单</h2>
            <p class="code-left-line">Demo</p>
            <sl-button type="primary" @click="showModal">
                <span>显示对话框</span>
            </sl-button>
            <sl-modal v-model="isVisible" title="提示" @cancel="handleCancel" @ok="modalSubmit">
                <sl-form :form="modalForm">
                    <sl-form-item
                        label='名称'
                        hasFeedback
                        v-bind="modalFormLayout"
                    >
                        <sl-input
                            placeholder="最多输入20个汉字"
                            v-decorator="[
                              'title',
                              {
                                rules: [{ required: true, message: '请填写名称!' }],
                              }
                            ]"
                        />
                    </sl-form-item>
                    <sl-form-item
                        label="描述"
                        v-bind="modalFormLayout"
                    >
                        <sl-textarea
                            placeholder="最多可输入50个汉字"
                            v-decorator="[
                              'messageArea',
                              {
                                rules: [{ required: true, message: '请填写短信内容!' }],
                              }
                            ]"
                        />
                    </sl-form-item>
                </sl-form>
            </sl-modal>
            <search-code :code="CodeInModal"></search-code>
        </div>
        <!--模态框中的表单结束-->

        <!--水平登陆栏-->
        <div class="detail-box">
            <h2>水平登陆栏</h2>
            <p class="code-left-line">Demo</p>
            <sl-form
                layout="inline"
                :form="inlineForm"
                @submit="handleSubmit($event, 'inlineForm')"
            >
                <sl-form-item
                    :validateStatus="userNameError() ? 'error' : ''"
                    :help="userNameError() || ''"
                >
                    <sl-input
                        v-decorator="[
                          'userName',
                          {rules: [{ required: true, message: '请输入用户名!' }]}
                        ]"
                        placeholder="请输入用户名"
                    >
                        <i class="salus-icon-account-o" slot="prefix"></i>
                    </sl-input>
                </sl-form-item>
                <sl-form-item
                    :validateStatus="passwordError() ? 'error' : ''"
                    :help="passwordError() || ''"
                >
                    <sl-input
                        v-decorator="[
                          'password',
                          {rules: [{ required: true, message: '请输入密码!' }]}
                        ]"
                        type="password"
                        placeholder="请输入密码"
                    >
                        <i class="salus-icon-unlock-o" slot="prefix"></i>
                    </sl-input>
                </sl-form-item>
                <sl-form-item>
                    <sl-button
                        type="primary"
                        html-type="submit"
                        :disabled="hasErrors(inlineForm.getFieldsError())"
                    >
                        登陆
                    </sl-button>
                </sl-form-item>
            </sl-form>
            <search-code :code="CodeHorizontalLogin"></search-code>
        </div>
        <!--水平登陆栏结束-->

        <!--登陆框-->
        <div class="detail-box">
            <h2>登陆框</h2>
            <p class="code-left-line">Demo</p>
            <sl-form
                :form="loginForm"
                @submit="handleSubmit($event, 'loginForm')"
            >
                <sl-form-item v-bind="loginFormLayout">
                    <sl-input
                        v-decorator="[
                          'userName',
                          { rules: [{ required: true, message: '请输入用户名!' }] }
                        ]"
                        placeholder="请输入用户名"
                    >
                        <i class="salus-icon-account-o" slot="prefix"></i>
                    </sl-input>
                </sl-form-item>
                <sl-form-item v-bind="loginFormLayout">
                    <sl-input
                        v-decorator="[
                          'password',
                          { rules: [{ required: true, message: '请输入密码!' }] }
                        ]"
                        type="password"
                        placeholder="请输入密码"
                    >
                        <i class="salus-icon-unlock-o" slot="prefix"></i>
                    </sl-input>
                </sl-form-item>
                <sl-form-item v-bind="loginFormLayout">
                    <sl-checkbox
                        v-decorator="[
                          'remember',
                          {
                            valuePropName: 'checked',
                            initialValue: true,
                          }
                        ]"
                    >
                        记住我
                    </sl-checkbox>
                    <a href="javascript:;" class="login-form-forgot">忘记密码</a>
                    <sl-button
                        type="primary"
                        html-type="submit"
                        full
                    >
                        登陆
                    </sl-button>
                    Or <a href="javascript:;">
                        立即注册!
                    </a>
                </sl-form-item>
            </sl-form>
            <search-code :code="CodeNormalLogin"></search-code>
        </div>
        <!--登陆框结束-->

        <!--高级搜索-->
        <div class="detail-box">
            <h2>高级搜索</h2>
            <p class="code-left-line">Demo</p>
            <div class="form-demo-box">
                <sl-form
                    class="salus-advanced-search-form"
                    :form="searchForm"
                    layout="vertical"
                    @submit="handleSubmit($event, 'searchForm')"
                >
                    <sl-row :gutter="24">
                        <sl-col
                            v-for="i in 10"
                            :key="i"
                            :span="8"
                            :style="{ display: i < count ? 'block' : 'none' }"
                        >
                            <sl-form-item :label="`Field ${i}`">
                                <sl-input
                                    v-decorator="[
                                        `field-${i}`,
                                        {
                                          rules: [{
                                            required: true,
                                            message: 'Input something!',
                                          }],
                                        }
                                    ]"
                                    placeholder="placeholder"
                                />
                            </sl-form-item>
                        </sl-col>
                    </sl-row>
                    <sl-row>
                        <sl-col
                            :span="24"
                            :style="{ textAlign: 'right' }"
                        >
                            <sl-button
                                type="primary"
                                html-type="submit"
                            >
                                查询
                            </sl-button>
                            <sl-button
                                :style="{ marginLeft: '8px' }"
                                @click="handleReset"
                            >
                                清除
                            </sl-button>
                            <a
                                href="javascript:;"
                                :style="{ marginLeft: '8px', fontSize: '12px' }"
                                @click="toggle"
                            >
                                {{expand ? '收起' : '展开'}} <i :class="`salus-icon-arrow-${expand ? 'up' : 'down'}-o`"></i>
                            </a>
                        </sl-col>
                    </sl-row>
                </sl-form>
                <div class="search-result-list">
                    Search Result List
                </div>
            </div>
            <search-code :code="CodeAdvancedSearch"></search-code>
        </div>
        <!--高级搜索结束-->

        <!--表单校验-->
        <div class="detail-box">
            <h2>表单校验</h2>
            <p class="code-left-line">Demo</p>
            <sl-form
                :form="validateForm"
                @submit="handleSubmit($event, 'validateForm')"
            >
                <sl-form-item
                    v-bind="validateFormLayout"
                    label="邮箱"
                >
                    <sl-input
                        v-decorator="[
                          'email',
                          {
                            rules: [{
                              type: 'email', message: '邮箱格式不正确!',
                            }, {
                              required: true, message: '请输入邮箱!',
                            }]
                          }
                        ]"
                    />
                </sl-form-item>
                <sl-form-item
                    v-bind="validateFormLayout"
                    label="密码"
                >
                    <sl-input
                        v-decorator="[
                          'password',
                          {
                            rules: [{
                              required: true, message: '请输入密码!',
                            }, {
                              validator: validateToNextPassword,
                            }],
                          }
                        ]"
                        type="password"
                    />
                </sl-form-item>
                <sl-form-item
                    v-bind="validateFormLayout"
                    label="确认密码"
                >
                    <sl-input
                        v-decorator="[
                          'confirm',
                          {
                            rules: [{
                              required: true, message: '请确认您的密码!',
                            }, {
                              validator: compareToFirstPassword,
                            }],
                          }
                        ]"
                        type="password"
                        @blur="handleConfirmBlur"
                    />
                </sl-form-item>
                <sl-form-item
                    v-bind="validateFormLayout"
                >
                    <span slot="label">
                        别名&nbsp;
                        <sl-tooltip title="您希望别人怎么称呼你?">
                            <i class="salus-icon-quest-mark-o"></i>
                        </sl-tooltip>
                    </span>
                    <sl-input
                        v-decorator="[
                          'nickname',
                          {
                            rules: [{ required: true, message: '请输入别名!', whitespace: true }]
                          }
                        ]"
                    />
                </sl-form-item>
                <sl-form-item
                    v-bind="validateFormLayout"
                    label="电话"
                >
                    <sl-input
                        v-decorator="[
                          'phone',
                          {
                            rules: [{ required: true, message: '请输入电话!' }],
                          }
                        ]"
                        style="width: 100%"
                    >
                        <sl-select
                            slot="addonBefore"
                            v-decorator="[
                                'prefix',
                                { initialValue: '86' }
                            ]"
                            style="width: 50px"
                        >
                            <sl-select-option value="86">
                                +86
                            </sl-select-option>
                            <sl-select-option value="87">
                                +87
                            </sl-select-option>
                        </sl-select>
                    </sl-input>
                </sl-form-item>
                <sl-form-item
                    v-bind="validateFormLayout"
                    label="网址"
                >
                    <sl-input
                        v-decorator="[
                          'website',
                          {
                            rules: [{
                              required: true, message: '请输入网址!',
                            }]
                          }
                        ]"
                    />
                </sl-form-item>
                <sl-form-item
                    v-bind="validateFormLayout"
                    label="验证码"
                >
                    <sl-row :gutter="8">
                        <sl-col :span="12">
                            <sl-input
                                v-decorator="[
                                  'captcha',
                                  {rules: [{ required: true, message: '请输入验证码!' }]}
                                ]"
                            />
                        </sl-col>
                        <sl-col :span="12">
                            <sl-button>获取验证码</sl-button>
                        </sl-col>
                    </sl-row>
                </sl-form-item>
                <sl-form-item v-bind="validateFormTailLayout">
                    <sl-checkbox
                        v-decorator="['agreement', {valuePropName: 'checked'}]"
                    >
                        我接受该 <a href="javascript:;">协议</a>
                    </sl-checkbox>
                </sl-form-item>
                <sl-form-item v-bind="validateFormTailLayout">
                    <sl-button
                        type="primary"
                        html-type="submit"
                    >
                        提交
                    </sl-button>
                </sl-form-item>
            </sl-form>
            <search-code :code="CodeRegister"></search-code>
        </div>
        <!--表单校验结束-->

        <!--指令式表单校验-->
        <div class="detail-box">
            <h2>指令式表单校验</h2>
            <p class="code-left-line">Demo</p>
            <sl-form
                :form="directiveForm"
                @submit="handleSubmit($event, 'directiveForm')"
            >
                <sl-form-item
                    v-bind="directiveFormLayout"
                    label="名称"
                    explainOutside
                    hasFeedback
                    :validateStatus="fieldError('username') ? 'error' : (fieldTouched('username') ? undefined : '')"
                    :help="fieldError('username') || (directiveForm.isFieldValidating('username') ? '加载中...' : '')"
                >
                    <div slot="extra">名称不超过10个字符</div>
                    <sl-input
                        v-decorator="[
                          'username',
                          {
                            rules: [{
                                max: 10, message: '名称过长!',
                            },{
                                required: true, message: '名称不能为空!',
                            },{
                                validator: validatorAsync
                            }]
                          }
                        ]"
                    />
                </sl-form-item>
                <sl-form-item
                    v-bind="directiveFormLayout"
                    label="邮箱"
                    explainOutside
                    hasFeedback
                    :validateStatus="fieldError('email') ? 'error' : (fieldTouched('email') ? undefined : '')"
                    :help="fieldError('email') || ''"
                >
                    <sl-input
                        v-decorator="[
                          'email',
                          {
                            rules: [{
                              type: 'email', message: '邮箱格式不正确!',
                            }, {
                              required: true, message: '请输入邮箱!',
                            }]
                          }
                        ]"
                    />
                </sl-form-item>
                <sl-form-item
                    v-bind="directiveFormLayout"
                    label="密码"
                    explainOutside
                    hasFeedback
                    :validateStatus="fieldError('password') ? 'error' : (fieldTouched('password') ? undefined : '')"
                    :help="fieldError('password') || ''"
                >
                    <sl-input
                        v-decorator="[
                          'password',
                          {
                            rules: [{
                              required: true, message: '请输入密码!',
                            }, {
                              validator: directiveValidateToNextPassword,
                            }],
                          }
                        ]"
                        type="password"
                    />
                </sl-form-item>
                <sl-form-item
                    v-bind="directiveFormLayout"
                    label="确认密码"
                    explainOutside
                    hasFeedback
                    :validateStatus="fieldError('confirm') ? 'error' : (fieldTouched('confirm') ? undefined : '')"
                    :help="fieldError('confirm') || ''"
                >
                    <sl-input
                        v-decorator="[
                          'confirm',
                          {
                            rules: [{
                              required: true, message: '请确认您的密码!',
                            }, {
                              validator: directiveCompareToFirstPassword,
                            }],
                          }
                        ]"
                        type="password"
                        @blur="directiveHandleConfirmBlur"
                    />
                </sl-form-item>
                <sl-form-item
                    v-bind="directiveFormLayout"
                    label="评论"
                    explainOutside
                    hasFeedback
                    :validateStatus="fieldError('comment') ? 'error' : (fieldTouched('comment') ? undefined : '')"
                    :help="fieldError('comment') || ''"
                >
                    <sl-textarea
                        row="2"
                        v-decorator="[
                          'comment',
                          {
                            rules: [{ required: true, message: '评论不能为空!' }],
                          }
                        ]"
                    />
                </sl-form-item>
                <sl-form-item :wrapperCol="{span: 12, offset: 7}">
                    <sl-button
                        type="primary"
                        html-type="submit"
                        style="margin-right: 8px"
                        :disabled="validErrors()"
                    >
                        提交
                    </sl-button>
                    <sl-button
                        @click="directiveForm.resetFields()"
                    >
                        重置
                    </sl-button>
                </sl-form-item>
            </sl-form>
            <search-code :code="CodeValidateReactive"></search-code>
        </div>
        <!--指令式表单校验结束-->

        <!--v-model表单校验-->
        <div class="detail-box">
            <h2>v-model表单校验</h2>
            <p class="code-left-line">Demo</p>
            <sl-form>
                <sl-form-item
                    v-bind="vModelFormLayout"
                    label="名称"
                    required
                    hasFeedback
                    :validateStatus="validateModelField(modelUserName, /^[\w-\.(\u4e00-\u9fa5)]+$/)"
                >
                    <div slot="help" v-if="validateModelFieldEmpty(modelUserName)">请输入名称</div>
                    <div slot="help" v-if="validateModelFieldRule(modelUserName, /^[\w-\.(\u4e00-\u9fa5)]+$/)">名称不符合规则</div>
                    <div slot="extra">名称不超过25个字符，仅支持中文、英文、数字、下划线、分隔符“-”、小数点</div>
                    <sl-input v-model="modelUserName.value" @input="modelUserName.dirty = true"/>
                </sl-form-item>
                <sl-form-item
                    v-bind="vModelFormLayout"
                    required
                    explainOutside
                    hasFeedback
                    :validateStatus="validateModelField(modelMinScale, /^[\d]+$/)"
                >
                    <span slot="label">
                        最小伸缩数&nbsp;
                        <sl-tooltip title="提示">
                            <i class="salus-icon-quest-mark-o"></i>
                        </sl-tooltip>
                    </span>
                    <div slot="help" v-if="validateModelFieldEmpty(modelMinScale)">请输入伸缩数</div>
                    <div slot="help" v-if="validateModelFieldRule(modelMinScale, /^[\d]+$/)">请输入数字</div>
                    <div slot="extra">最小实例数为0，可能会造成伸缩组中文实例支持</div>
                    <sl-input v-model="modelMinScale.value" @input="modelMinScale.dirty = true"/>
                </sl-form-item>
                <sl-form-item
                    v-bind="vModelFormLayout"
                    label="输入校验"
                    explainOutside
                    hasFeedback
                    validateStatus="validating"
                >
                    <sl-input v-model="modelInputValidate.value" />
                </sl-form-item>
                <sl-form-item
                    v-bind="vModelFormLayout"
                    required
                    explainOutside
                    hasFeedback
                    validateStatus="success"
                >
                    <span slot="label">
                        校验成功&nbsp;
                        <sl-tooltip title="提示">
                            <i class="salus-icon-quest-mark-o"></i>
                        </sl-tooltip>
                    </span>
                    <sl-input v-model="modelValidateSuccess.value" />
                </sl-form-item>
                <sl-form-item
                    v-bind="vModelFormLayout"
                    label="警示信息"
                    hasFeedback
                    validateStatus="warning"
                >
                    <div slot="help">名称不超过25个字符，仅支持中文、英文、数字、下划线、分隔符“-”、小数点</div>
                    <sl-input v-model="modelValidateWarn.value" />
                </sl-form-item>
                <sl-form-item
                    v-bind="vModelFormTailLayout"
                    label="最大伸缩数"
                >
                    <sl-row :gutter="8">
                        <sl-col :span="12">
                            <sl-select v-model="modelMaxScale.value">
                                <sl-select-option value="Option 1" >Option 1</sl-select-option>
                                <sl-select-option value="Option 2" >Option 2</sl-select-option>
                            </sl-select>
                        </sl-col>
                        <sl-col :span="12">
                            <a href="javascript:;">新建启动配置</a>
                            <sl-tooltip title="提示">
                                <i class="salus-icon-quest-mark-o"></i>
                            </sl-tooltip>
                        </sl-col>
                    </sl-row>
                </sl-form-item>
                <sl-form-item
                    :labelCol="{span: 3}"
                    label="最大伸缩数"
                    hasFeedback
                    validateStatus="validating"
                >
                    <sl-select v-model="modelMaxScale.value" style="width: 331px">
                        <sl-select-option value="Option 1" >Option 1</sl-select-option>
                        <sl-select-option value="Option 2" >Option 2</sl-select-option>
                    </sl-select>
                </sl-form-item>
                <sl-form-item
                    v-bind="vModelFormLayout"
                    label="计费方式"
                >
                    <sl-radio-group v-model="modelBill.value">
                        <sl-radio value="year">包年</sl-radio>
                        <sl-radio value="month">包月</sl-radio>
                        <sl-radio value="day">包天</sl-radio>
                    </sl-radio-group>
                </sl-form-item>
                <sl-form-item
                    v-bind="vModelFormLayout"
                    label="购买数量"
                >
                    <sl-input-number :min="1" :max="10" v-model="modelPurchase.value" handleType="symbols" />
                </sl-form-item>
            </sl-form>
            <!--
            explainOutside
                    iconOutside-->
            <search-code :code="CodeValidateStatic"></search-code>
        </div>
        <!--v-model表单校验结束-->


        <!--参数说明开始-->
        <div class="detail-box">
            <h2>API</h2>
            <p class="row-in-round">sl-form</p>
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
                    <td>form</td>
                    <td>经 Form.create() 包装过的组件会自带 this.form 属性，如果使用template语法，可以使用this.$form.createForm(this, options)</td>
                    <td>object</td>
                    <td>无</td>
                </tr>
                <tr>
                    <td>hideRequiredMark</td>
                    <td>隐藏所有表单项的必选标记</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>layout</td>
                    <td>表单布局</td>
                    <td>'horizontal'|'vertical'|'inline'</td>
                    <td>'horizontal'</td>
                </tr>
                </tbody>
            </table>

            <p class="row-in-round">sl-form 事件</p>
            <table class="salus-table salus-table-striped salus-table-hover">
                <thead>
                <tr>
                    <th width="15%">事件名称</th>
                    <th width="70%">说明</th>
                    <th width="15%">回调参数</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>submit</td>
                    <td>数据验证成功后回调事件</td>
                    <td>Function(e: Event)</td>
                </tr>
                </tbody>
            </table>


            <p class="row-in-round">Form.create(options) | this.$form.createForm(this, options)</p>
            <p>JSX使用方式：</p>
            <search-code :code="CodeJSX" :expand="true" :visibleTitle="false"></search-code>
            <p>单文件template使用方式：</p>
            <search-code :code="CodeTemplate" :expand="true" :visibleTitle="false"></search-code>

            <p class="row-in-round">options配置</p>
            <table class="salus-table salus-table-striped salus-table-hover">
                <thead>
                <tr>
                    <th width="20%">参数</th>
                    <th width="40%">说明</th>
                    <th width="40%">类型</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>props</td>
                    <td>仅仅支持Form.create({})(CustomizedForm)的使用方式，父组件需要映射到表单项上的属性声明(和vue组件props一致)</td>
                    <td>{}</td>
                </tr>
                <tr>
                    <td>mapPropsToFields</td>
                    <td>把父组件的属性映射到表单项上（如：把 Redux store 中的值读出），需要对返回值中的表单域数据用 Form.createFormField 标记，如果使用$form.createForm创建收集器，你可以将任何数据映射到Field中，不受父组件约束</td>
                    <td>(props) => ({ [fieldName]: FormField { value } })</td>
                </tr>
                <tr>
                    <td>validateMessages</td>
                    <td>默认校验信息，可用于把默认错误信息改为中文等</td>
                    <td>Object { [nested.path]: String }</td>
                </tr>
                <tr>
                    <td>onFieldsChange</td>
                    <td>当 Form.Item 子节点的值发生改变时触发，可以把对应的值转存到 Redux store</td>
                    <td>Function(props, fields)</td>
                </tr>
                <tr>
                    <td>onValuesChange</td>
                    <td>任一表单域的值发生改变时的回调	</td>
                    <td>(props, values) => void</td>
                </tr>
                </tbody>
            </table>

            <p class="row-in-round">this.form</p>
            <p>注意：使用 getFieldsValue getFieldValue setFieldsValue 等时，应确保对应的 field 已经用 getFieldDecorator 或 v-decorator 注册过了</p>
            <table class="salus-table salus-table-striped salus-table-hover">
                <thead>
                <tr>
                    <th width="20%">参数</th>
                    <th width="40%">描述</th>
                    <th width="40%">类型</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>getFieldDecorator</td>
                    <td>用于和表单进行双向绑定，单文件template可以使用指令v-decorator进行绑定，详见下方描述</td>
                    <td></td>
                </tr>
                <tr>
                    <td>getFieldError</td>
                    <td>获取某个输入控件的 Error</td>
                    <td>Function(name)</td>
                </tr>
                <tr>
                    <td>getFieldsError</td>
                    <td>获取一组输入控件的 Error ，如不传入参数，则获取全部组件的 Error</td>
                    <td>Function([names: string[]])</td>
                </tr>
                <tr>
                    <td>getFieldValue</td>
                    <td>获取一个输入控件的值</td>
                    <td>Function(fieldName: string)</td>
                </tr>
                <tr>
                    <td>getFieldsValue</td>
                    <td>获取一组输入控件的值，如不传入参数，则获取全部组件的值</td>
                    <td>Function([fieldNames: string[]])</td>
                </tr>
                <tr>
                    <td>isFieldsTouched</td>
                    <td>判断是否任一输入控件经历过 getFieldDecorator 或 v-decorator 的值收集时机 options.trigger</td>
                    <td>(names?: string[]) => boolean</td>
                </tr>
                <tr>
                    <td>isFieldTouched</td>
                    <td>判断一个输入控件是否经历过 getFieldDecorator 或 v-decorator 的值收集时机 options.trigger</td>
                    <td>(name: string) => boolean</td>
                </tr>
                <tr>
                    <td>isFieldValidating</td>
                    <td>判断一个输入控件是否在校验状态</td>
                    <td>Function(name)</td>
                </tr>
                <tr>
                    <td>resetFields</td>
                    <td>重置一组输入控件的值（为 initialValue）与状态，如不传入参数，则重置所有组件</td>
                    <td>Function([names: string[]])</td>
                </tr>
                <tr>
                    <td>setFields</td>
                    <td>设置一组输入控件的值与错误状态</td>
                    <td>Function({ [fieldName]: { value: any, errors: [Error] } })</td>
                </tr>
                <tr>
                    <td>setFieldsValue</td>
                    <td>设置一组输入控件的值</td>
                    <td>Function({ [fieldName]: value }</td>
                </tr>
                <tr>
                    <td>validateFields</td>
                    <td>校验并获取一组输入域的值与 Error，若 fieldNames 参数为空，则校验全部组件</td>
                    <td>Function([fieldNames: string[]], [options: object], callback: Function)</td>
                </tr>
                <tr>
                    <td>validateFieldsAndScroll</td>
                    <td>与 validateFields 相似，但校验完后，如果校验不通过的菜单域不在可见范围内，则自动滚动进可见范围</td>
                    <td>参考 validateFields</td>
                </tr>
                </tbody>
            </table>

            <p class="row-in-round">validateFields/validateFieldsAndScroll</p>
            <search-code :code="CodeValidateFields" :expand="true" :visibleTitle="false"></search-code>

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
                    <td>options.first</td>
                    <td>若为 true，则每一表单域的都会在碰到第一个失败了的校验规则后停止校验</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>options.firstFields</td>
                    <td>指定表单域会在碰到第一个失败了的校验规则后停止校验</td>
                    <td>String[]</td>
                    <td>[]</td>
                </tr>
                <tr>
                    <td>options.force</td>
                    <td>对已经校验过的表单域，在 validateTrigger 再次被触发时是否再次校验</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>options.scroll</td>
                    <td>定义 validateFieldsAndScroll 的滚动行为</td>
                    <td>Object</td>
                    <td>{}</td>
                </tr>
                </tbody>
            </table>
            <p class="row-in-round">validateFields 的 callback 参数示例</p>
            <p>errors：</p>
            <search-code :code="CodeValidateFieldsCbErrors" :expand="true" :visibleTitle="false"></search-code>
            <p>values：</p>
            <search-code :code="CodeValidateFieldsCbValues" :expand="true" :visibleTitle="false"></search-code>

            <p class="row-in-round">Form.createFormField</p>
            <p>用于标记 mapPropsToFields 返回的表单域数据</p>

            <p class="row-in-round">this.form.getFieldDecorator(id, options) 和 v-decorator="[id, options]" </p>
            <p>经过 getFieldDecorator或v-decorator 包装的控件，表单控件会自动添加 value（或 valuePropName 指定的其他属性） onChange（或 trigger 指定的其他属性），数据同步将被 Form 接管，这会导致以下结果：</p>
            <p>1. 你不再需要也不应该用 onChange 来做同步，但还是可以继续监听 onChange 等事件。</p>
            <p>2. 你不能用控件的 value defaultValue 等属性来设置表单域的值，默认值可以用 getFieldDecorator 或 v-decorator 里的 initialValue。</p>
            <p>3. 你不应该用 v-model，可以使用 this.form.setFieldsValue 来动态改变表单值。</p>
            <strong>特别注意</strong>
            <p>1.getFieldDecorator 和 v-decorator 不能用于装饰纯函数组件。</p>
            <p>2. getFieldDecorator 和 v-decorator 调用不能位于纯函数组件中。</p>

            <p class="row-in-round">getFieldDecorator(id, options) 和 v-decorator="[id, options]" 参数</p>
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
                    <td>id</td>
                    <td>必填输入控件唯一标志。支持嵌套式的写法</td>
                    <td>string</td>
                    <td></td>
                </tr>
                <tr>
                    <td>options.getValueFromEvent</td>
                    <td>可以把 onChange 的参数（如 event）转化为控件的值</td>
                    <td>function(..args)</td>
                    <td>[]</td>
                </tr>
                <tr>
                    <td>options.initialValue</td>
                    <td>子节点的初始值，类型、可选值均由子节点决定(注意：由于内部校验时使用 === 判断是否变化，建议使用变量缓存所需设置的值而非直接使用字面量))</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>options.normalize</td>
                    <td>转换默认的 value 给控件</td>
                    <td>function(value, prevValue, allValues): any</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>options.preserve</td>
                    <td>即便字段不再使用，也保留该字段的值</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>options.rules</td>
                    <td>校验规则，参考下方文档</td>
                    <td>object[]</td>
                    <td></td>
                </tr>
                <tr>
                    <td>options.trigger</td>
                    <td>收集子节点的值的时机</td>
                    <td>string</td>
                    <td>'change'</td>
                </tr>
                <tr>
                    <td>options.validateFirst</td>
                    <td>当某一规则校验不通过时，是否停止剩下的规则的校验</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>options.validateTrigger</td>
                    <td>校验子节点值的时机</td>
                    <td>string|string[]</td>
                    <td>'change'</td>
                </tr>
                <tr>
                    <td>options.valuePropName</td>
                    <td>子节点的值的属性，如 Switch 的是 'checked'</td>
                    <td>string</td>
                    <td>'value'</td>
                </tr>
                </tbody>
            </table>

            <p class="row-in-round">sl-form-item</p>
            <p>注意：一个 Form.Item 建议只放一个被 getFieldDecorator或v-decorator 装饰过的 child，当有多个被装饰过的 child 时，help required validateStatus 无法自动生成。</p>
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
                    <td>colon</td>
                    <td>配合 label 属性使用，表示是否显示 label 后面的冒号</td>
                    <td>boolean</td>
                    <td>true</td>
                </tr>
                <tr>
                    <td>extra</td>
                    <td>额外的提示信息，和 help 类似，当需要错误信息和提示文案同时出现时，可以使用这个</td>
                    <td>string|slot</td>
                    <td></td>
                </tr>
                <tr>
                    <td>hasFeedback</td>
                    <td>配合 validateStatus 属性使用，展示校验状态图标，建议只配合 Input 组件使用</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>help</td>
                    <td>提示信息，如不设置，则会根据校验规则自动生成</td>
                    <td>string|slot</td>
                    <td></td>
                </tr>
                <tr>
                    <td>label</td>
                    <td>label 标签的文本</td>
                    <td>string|slot</td>
                    <td></td>
                </tr>
                <tr>
                    <td>labelCol</td>
                    <td>label 标签布局，同 &lt;Col&gt; 组件，设置 span offset 值，如 {span: 3, offset: 12} 或 sm: {span: 3, offset: 12}</td>
                    <td>object</td>
                    <td></td>
                </tr>
                <tr>
                    <td>required</td>
                    <td>是否必填，如不设置，则会根据校验规则自动生成</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>validateStatus</td>
                    <td>校验状态，如不设置，则会根据校验规则自动生成，可选：'success' 'warning' 'error' 'validating'</td>
                    <td>string</td>
                    <td></td>
                </tr>
                <tr>
                    <td>wrapperCol</td>
                    <td>需要为输入控件设置布局样式时，使用该属性，用法同 labelCol</td>
                    <td>object</td>
                    <td></td>
                </tr>
                <tr>
                    <td>options.valuePropName</td>
                    <td>子节点的值的属性，如 Switch 的是 'checked'</td>
                    <td>string</td>
                    <td>'value'</td>
                </tr>
                </tbody>
            </table>

            <p class="row-in-round">校验规则</p>
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
                    <td>enum</td>
                    <td>枚举类型</td>
                    <td>string</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>len</td>
                    <td>字段长度</td>
                    <td>number</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>max</td>
                    <td>最大长度</td>
                    <td>number</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>min</td>
                    <td>最小长度的</td>
                    <td>number</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>message</td>
                    <td>校验文案</td>
                    <td>string</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>pattern</td>
                    <td>正则表达式校验</td>
                    <td>RegExp</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>required</td>
                    <td>是否必选</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>transform</td>
                    <td>校验前转换字段值</td>
                    <td>function(value) => transformedValue:any</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>type</td>
                    <td>内建校验类型，可选:string、number、boolean、method、regexp、integer、float、array、object、enum、date、url、hex、email</td>
                    <td>string</td>
                    <td>'string'</td>
                </tr>
                <tr>
                    <td>validator</td>
                    <td>自定义校验（注意，callback 必须被调用）</td>
                    <td>function(rule, value, callback)</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>whitespace</td>
                    <td>必选时，空格是否会被视为错误</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                </tbody>
            </table>
            <p>更多高级用法参考：<a href="https://github.com/yiminghe/async-validator">async-validator</a></p>
        </div>
        <!--explainOutside-->
        <!--iconOutside-->
        <!--参数说明结束-->
    </div>
</template>
<script>
    import {
        CodeDynamicAddFormItem,
        CodeHorizontalLogin,
        CodeNormalLogin,
        CodeAdvancedSearch,
        CodeRegister,
        CodeValidateReactive,
        CodeValidateRight,
        CodeInModal,
        CodeValidateStatic,
        CodeJSX,
        CodeTemplate,
        CodeValidateFields,
        CodeValidateFieldsCbErrors,
        CodeValidateFieldsCbValues,
    } from "./form.code";

    export default {
        data() {
            return {
                CodeDynamicAddFormItem,
                CodeHorizontalLogin,
                CodeNormalLogin,
                CodeAdvancedSearch,
                CodeRegister,
                CodeValidateReactive,
                CodeValidateRight,
                CodeInModal,
                CodeValidateStatic,
                CodeJSX,
                CodeTemplate,
                CodeValidateFields,
                CodeValidateFieldsCbErrors,
                CodeValidateFieldsCbValues,
                /*
                 * 表单控件
                 */
                validateFormTextRight: this.$form.createForm(this), // 表单校验提示信息位置-右边
                modalForm: this.$form.createForm(this), // 模态框中的表单
                inlineForm: this.$form.createForm(this), // 水平登陆栏
                loginForm: this.$form.createForm(this), // 登陆框
                searchForm: this.$form.createForm(this), // 高级搜索
                validateForm: this.$form.createForm(this), // 表单校验
                directiveForm: this.$form.createForm(this), // 指令式表单校验
                vModelForm: this.$form.createForm(this), // v-model表单校验
                /*
                 * 布局
                 */
                modalFormLayout: { // 模态框中的表单-布局
                    labelCol: {span: 6},
                    wrapperCol: {span: 10},
                },
                loginFormLayout: { // 登陆框-布局
                    wrapperCol: {span: 7},
                },
                validateFormLayout: { // 表单校验-布局
                    labelCol: {span: 3},
                    wrapperCol: {span: 12},
                },
                validateFormTailLayout: {
                    wrapperCol: {span: 14, offset: 6},
                },
                directiveFormLayout: { // 指令式表单校验-布局
                    labelCol: {span: 3},
                    wrapperCol: {span: 12},
                },
                vModelFormLayout: { // v-model表单校验-布局
                    labelCol: {span: 3},
                    wrapperCol: {span: 12},
                },
                vModelFormTailLayout: { // v-model表单校验-布局
                    labelCol: {span: 3},
                    wrapperCol: {span: 10},
                },
                /*
                 * 其他属性
                 */
                id: 1, // 动态表单项-序号
                isVisible: false, // 模态框中的表单-显示隐藏
                expand: false, // 高级搜索-是否展开
                confirmDirty: false, // 表单校验-确认密码是否被修改过
                asyncTimeout: null, // 异步检测
                directiveConfirmDirty: false, // 指令式表单校验-确认密码是否被修改过

                modelUserName: {value: '', dirty: false}, // v-model表单名称
                modelMinScale: {value: '', dirty: false}, // v-model表单最小伸缩数
                modelInputValidate: {value: '无止境的校验'}, // v-model表单输入校验
                modelValidateSuccess: {value: '成功'}, // v-model表单校验成功
                modelValidateWarn: {value: '劝退警告'}, // v-model表单校验警告
                modelMaxScale: {value: 'Option 1'}, // v-model表单最大伸缩数
                modelBill: {value: 'year'}, // v-model表单计费方式
                modelPurchase : {value: 1}, // v-model表单购买数量
            }
        },
        components: {
            SearchCode: () => import('../../common/searchCode/searchCode')
        },
        beforeCreate () {
            this.dynamicAddItemForm = this.$form.createForm(this); // 动态增减表单项
            this.dynamicAddItemForm.getFieldDecorator('keys', { initialValue: [1], preserve: true });
        },
        mounted () {
            this.$nextTick(() => {
                // 初始化进来先校验，触发登陆按钮的disabled
                this.inlineForm.validateFields();
                this.directiveForm.validateFields();
            });
        },
        computed: {
            /**
             * 高级搜索-展开11项收起7项
             */
            count () {
                return this.expand ? 11 : 7;
            },
        },
        methods: {
            /**
             * 动态增减表单项-remove
             */
            remove  (k) {
                const { dynamicAddItemForm } = this;
                const keys = dynamicAddItemForm.getFieldValue('keys');
                if (keys.length === 1) {
                    return;
                }
                dynamicAddItemForm.setFieldsValue({
                    keys: keys.filter(key => key !== k),
                });
            },
            /**
             * 动态增减表单项-add
             */
            add  () {
                const { dynamicAddItemForm } = this;
                const keys = dynamicAddItemForm.getFieldValue('keys');
                const nextKeys = keys.concat(++this.id);
                // 通知表单检测更改
                dynamicAddItemForm.setFieldsValue({
                    keys: nextKeys,
                });
            },
            /**
             * 表单提交
             */
            handleSubmit  (e, form) {
                e.preventDefault();
                this[form].validateFields((err, values) => {
                    if (!err) {
                        console.log('Received values of form: ', values);
                    }
                });
            },
            /**
             * 模态框中的表单-打开模态框
             */
            showModal() {
                this.isVisible = true;
            },
            /**
             * 模态框中的表单-关闭模态框
             */
            handleCancel() {
                this.isVisible = false;
            },
            /**
             * 模态框中的表单-提交模态框
             */
            modalSubmit() {
              this.modalForm.validateFields((err, values) => {
                if (err) {
                  return;
                }
                console.log('Received values of form: ', values);
                this.modalForm.resetFields();
                this.isVisible = false;
              });
            },
            /**
             * 水平登陆栏-校验用户名错误（未触碰过不校验）
             */
            userNameError() {
                const { getFieldError, isFieldTouched } = this.inlineForm;
                return isFieldTouched('userName') && getFieldError('userName');
            },
            /**
             * 水平登陆栏-校验密码错误（未触碰过不校验）
             */
            passwordError() {
                const { getFieldError, isFieldTouched } = this.inlineForm;
                return isFieldTouched('password') && getFieldError('password');
            },
            /**
             * 水平登陆栏-是否有错误（校验都通过登陆按钮高亮）
             */
            hasErrors(fieldsError) {
                return Object.keys(fieldsError).some(field => fieldsError[field]);
            },
            /**
             * 高级搜索-清除
             */
            handleReset() {
                this.searchForm.resetFields();
            },
            /**
             * 高级搜索-展开收起
             */
            toggle() {
                this.expand = !this.expand;
            },
            /**
             * 表单校验-确认密码失去焦点时校验与密码是否一致
             */
            handleConfirmBlur(e) {
                const value = e.target.value;
                this.confirmDirty = this.confirmDirty || !!value;
            },
            /**
             * 表单校验-根据确认密码校验密码
             */
            compareToFirstPassword(rule, value, callback) {
                const form = this.validateForm;
                if (value && value !== form.getFieldValue('password')) {
                    // 把检验规则message改为‘密码不一致’
                    callback('密码不一致!');
                } else {
                    callback();
                }
            },
            /**
             * 表单校验-根据密码校验确认密码
             */
            validateToNextPassword(rule, value, callback) {
                const form = this.validateForm;
                if (value && this.confirmDirty) {
                    form.validateFields(['confirm'], { force: true });
                }
                callback();
            },
            /**
             * 指令式表单校验-确认密码失去焦点时校验与密码是否一致
             */
            directiveHandleConfirmBlur(e) {
                const value = e.target.value;
                this.directiveConfirmDirty = this.directiveConfirmDirty || !!value;
            },
            /**
             * 指令式表单校验-根据确认密码校验密码
             */
            directiveCompareToFirstPassword(rule, value, callback) {
                const form = this.directiveForm;
                if (value && value !== form.getFieldValue('password')) {
                    // 把检验规则message改为‘密码不一致’
                    callback('密码不一致!');
                } else {
                    callback();
                }
            },
            /**
             * 指令式表单校验-根据密码校验确认密码
             */
            directiveValidateToNextPassword(rule, value, callback) {
                const form = this.directiveForm;
                if (value && this.directiveConfirmDirty) {
                    form.validateFields(['confirm'], { force: true });
                }
                callback();
            },
            /**
             * 指令式表单校验-异步校验
             */
            validatorAsync(rule, value, callback) {
                clearTimeout(this.asyncTimeout);
                this.asyncTimeout = setTimeout(() => {
                    callback();
                },1000);
            },
            /**
             * 指令式表单校验-表单项是否触碰过
             */
            fieldTouched(name) {
                return this.directiveForm.isFieldTouched(name);
            },
            /**
             * 指令式表单校验-表单项是否错误（非触碰过不计）
             */
            fieldError(name) {
                return this.fieldTouched(name) && this.directiveForm.getFieldError(name);
            },
            /**
             * 指令式表单校验-所有表单项是否有误（全部未触碰不计）
             */
            validErrors() {
                const fieldsError = this.directiveForm.getFieldsError();
                return Object.keys(this.directiveForm.getFieldsValue()).every(field => this.fieldTouched(field))
                    ? Object.keys(fieldsError).some(field => fieldsError[field]) : true;
            },
            /**
             * v-model表单校验表单项
             */
            validateModelField(field, reg) {
                if(!field.dirty)
                    return ''
                if(this.validateModelFieldEmpty(field) || this.validateModelFieldRule(field, reg))
                    return 'error'
                return 'success'
            },
            /**
             * v-model表单校验表单项是否为空
             */
            validateModelFieldEmpty(field) {
                return field.dirty && !field.value.length;
            },
            /**
             * v-model表单校验表单项规则
             */
            validateModelFieldRule(field, reg) {
                return field.value.length && !reg.test(field.value);
            },
        }
    }
</script>
<style scoped>
    @import './form.scss';
</style>