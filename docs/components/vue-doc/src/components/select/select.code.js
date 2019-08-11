/* 基础下拉选择器 */
export const CodeBasic = 
`    <template>
        <div>
            <sl-select v-model="value" allowClear @change="handleChange">
                <sl-select-option v-for="item in listOfOption" :key="item.value" >{{item.label}}</sl-select-option>
            </sl-select>
        </div>
    </template>
    <script>
        export default {
            data() {
              return {
                value: 'a10',
                listOfOption: [],
              }
            },
            created() {
                const children = [];
                for (let i = 10; i < 36; i++) {
                    children.push({ label: i.toString(36) + i, value: i.toString(36) + i });
                }
                this.listOfOption = children;
            },
            methods: {
                handleChange(value) {
                    console.log(\`selected \${value}\`);
                },
            }
        }
    </script>`

/* 大小 */
export const CodeSize = 
`    <template>
        <div>
            <sl-select v-model="value" allowClear size="large" style="margin-right: 20px;">
                <sl-select-option v-for="item in listOfOption" :key="item.value" >{{item.label}}</sl-select-option>
            </sl-select>
            <sl-select v-model="value" allowClear size="default" style="margin-right: 20px;">
                <sl-select-option v-for="item in listOfOption" :key="item.value" >{{item.label}}</sl-select-option>
            </sl-select>
            <sl-select v-model="value" allowClear size="small">
                <sl-select-option v-for="item in listOfOption" :key="item.value" >{{item.label}}</sl-select-option>
            </sl-select>
        </div>
    </template>
    <script>
        export default {
            data() {
              return {
                value: 'a10',
                listOfOption: [],
              }
            },
            created() {
                const children = [];
                for (let i = 10; i < 36; i++) {
                    children.push({ label: i.toString(36) + i, value: i.toString(36) + i });
                }
                this.listOfOption = children;
            },
        }
    </script>`

/* 带搜索 */
export const CodeSearch = 
`    <template>
        <div>
            <sl-select v-model="values" mode="multiple" showSearch allowClear style="margin-right: 20px">
                <sl-select-option v-for="item in listOfOption" :key="item.value" >{{item.label}}</sl-select-option>
            </sl-select>
            <sl-select v-model="value" showSearch allowClear>
                <sl-select-option v-for="item in listOfOption" :key="item.value" >{{item.label}}</sl-select-option>
            </sl-select>
        </div>
    </template>
    <script>
        export default {
            data() {
              return {
                value: '',
                values: ['a10', 'b11'],
                listOfOption: [],
              }
            },
            created() {
                const children = [];
                for (let i = 10; i < 36; i++) {
                    children.push({ label: i.toString(36) + i, value: i.toString(36) + i });
                }
                this.listOfOption = children;
            },
        }
    </script>`

/* 多选 */
export const CodeMultiple = 
`    <template>
        <div>
            <p>多选下拉，可以通过maxMultipleCount控制最多选择的个数。本例的maxMultipleCount为3</p>
            <sl-select v-model="values" mode="multiple" :maxMultipleCount="3">
                <sl-select-option v-for="item in listOfOption" :key="item.value" >{{item.label}}</sl-select-option>
            </sl-select>
            <p>多选下拉，可以通过maxTagCount控制最多显示的个数。本例的maxTagCount为3</p>
            <sl-select v-model="values" mode="multiple" :maxTagCount="3" allowClear>
                <sl-select-option v-for="item in listOfOption" :key="item.value" >{{item.label}}</sl-select-option>
            </sl-select>
            <p>多选下拉，可以通过maxTagCount和tagWidth控制最多显示的个数和tag的宽度。本例的maxTagCount为3，tagWidth为60</p>
            <sl-select v-model="values" mode="multiple" :maxTagCount="3" :tagWidth="60" allowClear>
                <sl-select-option v-for="item in listOfOption" :key="item.value" >{{item.label}}</sl-select-option>
            </sl-select>
        </div>
    </template>
    <script>
        export default {
            data() {
              return {
                values: ['a10', 'b11'],
                listOfOption: [],
              }
            },
            created() {
                const children = [];
                for (let i = 10; i < 36; i++) {
                    children.push({ label: i.toString(36) + i, value: i.toString(36) + i });
                }
                this.listOfOption = children;
            },
        }
    </script>`

/* 全选 */
export const CodeSelectAll = 
`    <template>
        <div>
            <sl-select v-model="values" mode="multiple" showSelectAll allowClear>
                <sl-select-option v-for="item in listOfOption" :key="item.value" >{{item.label}}</sl-select-option>
            </sl-select>
        </div>
    </template>
    <script>
        export default {
            data() {
              return {
                values: ['a10', 'b11'],
                listOfOption: [],
              }
            },
            created() {
                const children = [];
                for (let i = 10; i < 36; i++) {
                    children.push({ label: i.toString(36) + i, value: i.toString(36) + i });
                }
                this.listOfOption = children;
            },
        }
    </script>`

/* 反选 */
export const CodeSelectInverse = 
`    <template>
        <div>
            <sl-select v-model="values" mode="multiple" showSelectInverse>
                <sl-select-option v-for="item in listOfOption" :key="item.value" >{{item.label}}</sl-select-option>
            </sl-select>
        </div>
    </template>
    <script>
        export default {
            data() {
              return {
                values: ['a10', 'b11'],
                listOfOption: [],
              }
            },
            created() {
                const children = [];
                for (let i = 10; i < 36; i++) {
                    children.push({ label: i.toString(36) + i, value: i.toString(36) + i });
                }
                this.listOfOption = children;
            },
        }
    </script>`

/* 带联动 */
export const CodeCascade = 
`    <template>
        <div>
            <sl-select :defaultValue="provinceData[0]" style="margin-right: 20px" @change="handleProvinceChange">
                <sl-select-option v-for="province in provinceData" :key="province">{{province}}</sl-select-option>
            </sl-select>
            <sl-select v-model="secondCity">
                <sl-select-option v-for="city in cities" :key="city">{{city}}</sl-select-option>
            </sl-select>
        </div>
    </template>
    <script>
        const provinceData = ['福建省', '广东省'];
        const cityData = {
          '福建省': [ '福州市', '厦门市', '莆田市' ],
          '广东省': [ '广州市', '佛山市', '深圳' ],
        };
        export default {
            data() {
              return {
                provinceData,
                cityData,
                cities: cityData[provinceData[0]],
                secondCity: cityData[provinceData[0]][0],
              }
            },
            methods: {
                handleProvinceChange(value) {
                    this.cities = cityData[value];
                    this.secondCity = cityData[value][0];
                }
            },
        }
    </script>`

/* 禁用 */
export const CodeDisable = 
`    <template>
        <div>
            <sl-select v-model="value" disabled style="margin-right: 20px">
                <sl-select-option v-for="item in listOfOption" :key="item.label + 'demo01'" :value="item.value">{{item.label}}</sl-select-option>
            </sl-select>
            <sl-select v-model="values" mode="multiple" disabled>
                <sl-select-option v-for="item in listOfOption" key="item.label" :value="item.value">{{item.label}}</sl-select-option>
            </sl-select>
        </div>
    </template>
    <script>
        export default {
            data() {
              return {
                value: 'a10',
                values: ['a10', 'b11'],
                listOfOption: [],
              }
            },
            created() {
                const children = [];
                for (let i = 10; i < 36; i++) {
                    children.push({ label: i.toString(36) + i, value: i.toString(36) + i });
                }
                this.listOfOption = children;
            },
        }
    </script>`


/* 禁用 */
export const CodeBigList = 
`    import { Component, OnInit } from '@angular/core';
    
    @Component({
        selector:'salus-select-big-list',
        template: \`
            <button (click)="renderBigList()" salus-button>渲染长列表</button>
            <salus-select style="margin-left: 20px;" 
            [(ngModel)]="bigListValue" 
            salusPlaceHolder="请选择" 
            salusMode="default">
                <salus-option *ngFor="let option of bigList" 
                [salusLabel]="option.label" 
                [salusValue]="option.value"></salus-option>
            </salus-select>
        \`,
        styles : []
    })
    export class PageSelect implements OnInit {
        bigListValue = [ 'a10' ];
        bigList = [];

        ngOnInit() {
          const children = [];
          for (let i = 10; i < 36; i++) {
              children.push({ label: i.toString(36) + i, value: i.toString(36) + i });
          }
          this.bigList = children;
        }

        renderBigList() {
            const children = [];
            for (let i = 10; i < 5000; i++) {
                children.push({ label: i.toString(36) + i, value: i.toString(36) + i});
            }
            this.bigList = children;
        }
    }`