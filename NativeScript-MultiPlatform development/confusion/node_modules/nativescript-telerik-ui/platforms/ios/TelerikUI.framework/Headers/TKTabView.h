//
//  TKTabView.h
//  TelerikUI
//
//  Copyright (c) 2016 Telerik. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "TKTabStrip.h"
#import "TKSlideView.h"
#import "TKObservableArray.h"


#ifndef TKTAB_VIEW
#define TKTAB_VIEW

@protocol TKTabLayout;
@protocol TKTabViewDelegate <NSObject>

@optional
- (TKTabItemView *) viewForTab: (TKTab *) tab;
- (UIView *) contentViewForTab: (TKTab *) tab;
- (BOOL) tabViewWillSelectTab: (TKTab *) tab;
- (void) tabViewDidSelectTab: (TKTab *) tab;

- (CGRect) adjustTabStripLayout: (CGRect) availableSpace;
- (CGRect) adjustSlideViewLayout: (CGRect) availableSpace;

@end

@interface TKTabView : UIView

@property (strong, nonatomic) TKSlideView *slideView;
@property (strong, nonatomic) TKTabStrip *tabStrip;

@property (strong, nonatomic) TKTab *selectedTab;
@property (strong, nonatomic) TKObservableArray *tabs;
@property (weak, nonatomic) id<TKTabViewDelegate> delegate;
@property (assign, nonatomic) TKTabViewPosition tabsPosition;

- (id) initWithViewControllers: (NSArray *) controllers;

- (TKTab *) addTabWithTitle: (NSString *) title;
- (TKTab *) addTabWithTitle: (NSString *) title andContentView: (UIView *) contentView;
- (TKTab *) addTabWithTitle: (NSString *) title view: (TKTabItemView *) view andContentView: (UIView *) contentView;

- (void) removeTabWithTitle: (NSString *) title;

- (TKTab *) tabWithTitle: (NSString *) title;
- (BOOL) removeTab: (TKTab *) tab;
@end

#endif
