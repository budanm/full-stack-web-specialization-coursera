//
//  TKTabStrip.h
//  TelerikUI
//
//  Created by Viktor Skarlatov on 11/18/16.
//  Copyright © 2016 Telerik. All rights reserved.
//

#ifndef TK_TAB_STRIP
#define TK_TAB_STRIP

#import "TKTab.h"
#import "TKTabLayout.h"
#import "TKObservableArray.h"
#import <UIKit/UIKit.h>

@protocol TKTabStripDelegate <NSObject>

@optional
- (BOOL) tabStripWillSelectTab: (TKTab *) tab;
- (void) tabStripDidSelectTab: (TKTab *) tab;
@end

@interface TKTabStrip : UIView

@property (weak, nonatomic) id<TKTabStripDelegate> delegate;
@property (strong, nonatomic) TKObservableArray *tabs;
@property (strong, nonatomic) TKTab *selectedTab;
@property (strong, nonatomic) id<TKTabLayout> layout;
@property (strong, nonatomic) UIView *selectedTabMarker;
@property (assign, nonatomic) NSUInteger selectedTabMarkerHeight;
@property (assign, nonatomic) BOOL animateSelectedMarker;

- (TKTab *) findTabForView: (UIView *) view;
- (TKTab *) findTabForContentView: (UIView *) view;
- (BOOL) canSelectTab: (TKTab *) tab;
- (void) requestLayout;

@end

#endif
