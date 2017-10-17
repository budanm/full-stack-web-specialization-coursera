//
//  TKTabLayout.h
//  TelerikUI
//
//  Created by Viktor Skarlatov on 10/6/16.
//  Copyright © 2016 Telerik. All rights reserved.
//

#ifndef TKTabLayout_h
#define TKTabLayout_h

#import <Foundation/Foundation.h>
#import "TKTab.h"

@class TKTabStrip;
typedef NS_ENUM(NSInteger, TKTabViewPosition) {
    TKTabViewPositionTop,
    TKTabViewPositionBottom,
    TKTabViewPositionLeft,
    TKTabViewPositionRight
};

typedef NS_ENUM(NSInteger, TKTabAlignment) {
    TKTabAlignmentTop,
    TKTabAlignmentBottom,
    TKTabAlignmentLeft,
    TKTabAlignmentRight,
    TKTabAlignmentCenter,
    TKTabAlignmentStretch
};

@protocol TKTabLayoutDelegate <NSObject>

- (CGRect) layoutSelectedTabMarker: (CGRect) availableSpace;

@end

@protocol TKTabLayout <NSObject>

@property (assign, nonatomic) TKTabAlignment tabAlignment;
@property (assign, nonatomic) NSInteger tabWidth;
@property (assign, nonatomic) NSInteger tabHeight;
@property (strong, nonatomic) UIView *selectedTabMarker;
@property (assign, nonatomic) NSUInteger selectedTabMarkerHeight;
@property (assign, nonatomic) NSInteger maxVisibleTabs;
@property (weak, nonatomic) id<TKTabLayoutDelegate> delegate;

- (void) updateSelectedTabMarkerForTab: (TKTab *) selectedTab;
- (void) layoutTabsInFrame:(CGRect)frame;
- (void) didAddTab: (TKTab *) tab;
- (void) didRemoveTab: (TKTab *) tab;
- (void) didSelectTab: (TKTab *) selectedTab deselectedTab: (TKTab *) deselectedTab;
- (void) load: (TKTabStrip *) tabView;
- (void) unload;

@end

#endif /* TKTabLayout_h */
