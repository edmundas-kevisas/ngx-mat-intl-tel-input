import * as i0 from '@angular/core';
import { OnInit, OnDestroy, EventEmitter, ChangeDetectorRef, ElementRef } from '@angular/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { NgControl, NgForm, FormGroupDirective } from '@angular/forms';
import { NationalNumber, PhoneNumber, E164Number, CountryCode as CountryCode$1 } from 'libphonenumber-js';
import { FocusMonitor } from '@angular/cdk/a11y';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInput } from '@angular/material/input';
import { MatMenu } from '@angular/material/menu';
import { Subject } from 'rxjs';

declare class CountryCode {
    allCountries: (string | number | string[])[][];
    static ɵfac: i0.ɵɵFactoryDeclaration<CountryCode, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CountryCode>;
}

interface Country {
    name: string;
    iso2: string;
    dialCode: string;
    priority: number;
    areaCodes?: string[];
    flagClass: string;
    placeHolder?: string;
}

type PhoneNumberFormat = 'default' | 'national' | 'international';

declare class NgxMatIntlTelInputComponent implements OnInit, OnDestroy, MatFormFieldControl<any> {
    private _changeDetectorRef;
    private countryCodeData;
    private fm;
    private elRef;
    ngControl: NgControl;
    static nextId: number;
    preferredCountries: Array<string>;
    enablePlaceholder: boolean;
    inputPlaceholder: string | undefined;
    cssClass: string | undefined;
    name: string | undefined;
    onlyCountries: Array<string>;
    errorStateMatcher: ErrorStateMatcher;
    private _defaultErrorStateMatcher;
    private _parentForm;
    private _parentFormGroup;
    enableSearch: boolean;
    searchPlaceholder: string | undefined;
    describedBy: string;
    get format(): PhoneNumberFormat;
    set format(value: PhoneNumberFormat);
    matMenu: MatMenu | undefined;
    private _placeholder;
    private _required;
    private _disabled;
    stateChanges: Subject<void>;
    focused: boolean;
    id: string;
    phoneNumber: NationalNumber | string | undefined;
    allCountries: Array<Country>;
    preferredCountriesInDropDown: Array<Country>;
    selectedCountry: Country | undefined;
    numberInstance: PhoneNumber | undefined;
    value: E164Number | string | undefined;
    searchCriteria: string | undefined;
    countryChanged: EventEmitter<Country>;
    private previousFormattedNumber;
    private _format;
    static getPhoneNumberPlaceHolder(countryISOCode: CountryCode$1): string | undefined;
    onTouched: () => void;
    propagateChange: (_: any) => void;
    constructor(_changeDetectorRef: ChangeDetectorRef, countryCodeData: CountryCode, fm: FocusMonitor, elRef: ElementRef<HTMLElement>, ngControl: NgControl, _parentForm: NgForm, _parentFormGroup: FormGroupDirective, _defaultErrorStateMatcher: ErrorStateMatcher);
    ngOnInit(): void;
    get errorState(): boolean;
    onPhoneNumberChange(): void;
    onCountrySelect(country: Country, el: MatInput): void;
    getCountry(code: string): Country;
    onInputKeyPress(event: KeyboardEvent): void;
    protected fetchCountryData(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: any): void;
    get empty(): boolean;
    get shouldLabelFloat(): boolean;
    get placeholder(): string;
    set placeholder(value: string);
    get required(): boolean;
    set required(value: boolean);
    get disabled(): boolean;
    set disabled(value: boolean);
    setDescribedByIds(ids: string[]): void;
    onContainerClick(event: MouseEvent): void;
    reset(): void;
    ngOnDestroy(): void;
    private get formattedPhoneNumber();
    private formatAsYouTypeIfEnabled;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxMatIntlTelInputComponent, [null, null, null, null, { optional: true; self: true; }, { optional: true; }, { optional: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxMatIntlTelInputComponent, "ngx-mat-intl-tel-input", never, { "preferredCountries": { "alias": "preferredCountries"; "required": false; }; "enablePlaceholder": { "alias": "enablePlaceholder"; "required": false; }; "inputPlaceholder": { "alias": "inputPlaceholder"; "required": false; }; "cssClass": { "alias": "cssClass"; "required": false; }; "name": { "alias": "name"; "required": false; }; "onlyCountries": { "alias": "onlyCountries"; "required": false; }; "errorStateMatcher": { "alias": "errorStateMatcher"; "required": false; }; "enableSearch": { "alias": "enableSearch"; "required": false; }; "searchPlaceholder": { "alias": "searchPlaceholder"; "required": false; }; "describedBy": { "alias": "describedBy"; "required": false; }; "format": { "alias": "format"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "required": { "alias": "required"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, { "countryChanged": "countryChanged"; }, never, never, true, never>;
}

export { NgxMatIntlTelInputComponent };
//# sourceMappingURL=index.d.ts.map
